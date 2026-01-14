import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

interface CheckoutItem {
  name: string
  price: number
  quantity: number
  image?: string
  description?: string
}

// Lazy initialization of Stripe
function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
  })
}

export async function POST(request: NextRequest) {
  try {
    const { items, successUrl, cancelUrl } = await request.json() as {
      items: CheckoutItem[]
      successUrl?: string
      cancelUrl?: string
    }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      )
    }

    const stripe = getStripe()

    // Check if Stripe is configured
    if (!stripe) {
      // Return a mock response for development
      console.log('Stripe not configured - mock checkout:', items)
      return NextResponse.json({
        url: successUrl || '/merch?checkout=success',
        sessionId: 'mock_session_' + Date.now(),
        mock: true
      })
    }

    // Create line items for Stripe
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.description || undefined,
          images: item.image ? [item.image] : undefined,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }))

    // Get the origin for redirect URLs
    const origin = request.headers.get('origin') || 'https://hlpflrecords.com'

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: successUrl || `${origin}/merch?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${origin}/merch?checkout=cancelled`,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'NL', 'BE', 'AT', 'CH'],
      },
      metadata: {
        source: 'hlpfl_merch_store',
        items: JSON.stringify(items.map(i => ({ name: i.name, qty: i.quantity })))
      }
    })

    return NextResponse.json({
      url: session.url,
      sessionId: session.id
    })

  } catch (error) {
    console.error('Checkout error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
