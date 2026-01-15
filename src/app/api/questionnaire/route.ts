import { NextRequest, NextResponse } from 'next/server'

interface QuestionnaireData {
  artistName: string
  legalName: string
  email: string
  phone: string
  location: string
  hasLLC: string
  llcName: string
  llcState: string
  llcFormationDate: string
  hasMultipleEntities: string
  additionalEntities: string
  einNumber: string
  hasLawyer: string
  lawyerName: string
  lawyerContact: string
  hasPreviousContracts: string
  contractDetails: string
  hasTrademarks: string
  trademarkDetails: string
  yearsActive: string
  monthlyRevenue: string
  revenueStreams: string[]
  hasTeam: string
  teamDetails: string
  hasManager: string
  managerDetails: string
  hasDistributionDeal: string
  distributorName: string
  distributionTerms: string
  hasPublishingDeal: string
  publisherName: string
  publishingTerms: string
  hasSyncDeals: string
  syncDetails: string
  hasLabelDeal: string
  labelDetails: string
  totalTracks: string
  releasedTracks: string
  unreleasedTracks: string
  ownsAllMasters: string
  masterOwnershipDetails: string
  ownsAllPublishing: string
  publishingOwnershipDetails: string
  primaryGoals: string[]
  shortTermGoals: string
  longTermGoals: string
  expectedSupport: string[]
  howDidYouHear: string
  additionalNotes: string
}

// Rate limiting storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }) // 1 hour window
    return true
  }

  if (limit.count >= 3) {
    return false
  }

  limit.count++
  return true
}

function sanitize(str: string | undefined): string {
  if (!str) return ''
  return str.replace(/[<>]/g, '').trim().slice(0, 5000)
}

function formatArrayForEmail(arr: string[]): string {
  if (!arr || arr.length === 0) return 'None specified'
  return arr.join(', ')
}

async function sendEmailWithResend(data: QuestionnaireData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.log('Resend API key not configured - email would be sent in production')
    return true // Return true to not block submissions in dev
  }

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #c87941, #a0613a); color: #000; padding: 30px; text-align: center; }
    .section { background: #f9f9f9; margin: 20px 0; padding: 20px; border-radius: 8px; border-left: 4px solid #c87941; }
    .section h2 { color: #c87941; margin-top: 0; font-size: 18px; }
    .field { margin: 10px 0; }
    .field-label { font-weight: bold; color: #555; }
    .field-value { color: #333; }
    .tag { display: inline-block; background: #c87941; color: white; padding: 3px 10px; border-radius: 15px; margin: 2px; font-size: 12px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Artist Questionnaire Submission</h1>
    <p>A new artist has submitted the onboarding questionnaire</p>
  </div>

  <div class="section">
    <h2>Basic Information</h2>
    <div class="field"><span class="field-label">Artist Name:</span> <span class="field-value">${sanitize(data.artistName)}</span></div>
    <div class="field"><span class="field-label">Legal Name:</span> <span class="field-value">${sanitize(data.legalName)}</span></div>
    <div class="field"><span class="field-label">Email:</span> <span class="field-value">${sanitize(data.email)}</span></div>
    <div class="field"><span class="field-label">Phone:</span> <span class="field-value">${sanitize(data.phone) || 'Not provided'}</span></div>
    <div class="field"><span class="field-label">Location:</span> <span class="field-value">${sanitize(data.location) || 'Not provided'}</span></div>
  </div>

  <div class="section">
    <h2>Business Entity</h2>
    <div class="field"><span class="field-label">Has LLC:</span> <span class="field-value">${sanitize(data.hasLLC) || 'Not specified'}</span></div>
    ${data.hasLLC === 'Yes' ? `
    <div class="field"><span class="field-label">LLC Name:</span> <span class="field-value">${sanitize(data.llcName)}</span></div>
    <div class="field"><span class="field-label">State:</span> <span class="field-value">${sanitize(data.llcState)}</span></div>
    <div class="field"><span class="field-label">Formation Date:</span> <span class="field-value">${sanitize(data.llcFormationDate)}</span></div>
    <div class="field"><span class="field-label">EIN:</span> <span class="field-value">${sanitize(data.einNumber) || 'Not provided'}</span></div>
    ` : ''}
    <div class="field"><span class="field-label">Multiple Entities:</span> <span class="field-value">${sanitize(data.hasMultipleEntities) || 'Not specified'}</span></div>
    ${data.hasMultipleEntities === 'Yes' ? `<div class="field"><span class="field-label">Details:</span> <span class="field-value">${sanitize(data.additionalEntities)}</span></div>` : ''}
  </div>

  <div class="section">
    <h2>Legal</h2>
    <div class="field"><span class="field-label">Has Entertainment Lawyer:</span> <span class="field-value">${sanitize(data.hasLawyer) || 'Not specified'}</span></div>
    ${data.hasLawyer === 'Yes' ? `
    <div class="field"><span class="field-label">Lawyer/Firm:</span> <span class="field-value">${sanitize(data.lawyerName)}</span></div>
    <div class="field"><span class="field-label">Contact:</span> <span class="field-value">${sanitize(data.lawyerContact)}</span></div>
    ` : ''}
    <div class="field"><span class="field-label">Previous Contracts:</span> <span class="field-value">${sanitize(data.hasPreviousContracts) || 'Not specified'}</span></div>
    ${data.hasPreviousContracts === 'Yes' ? `<div class="field"><span class="field-label">Contract Details:</span> <span class="field-value">${sanitize(data.contractDetails)}</span></div>` : ''}
    <div class="field"><span class="field-label">Trademarks:</span> <span class="field-value">${sanitize(data.hasTrademarks) || 'Not specified'}</span></div>
    ${(data.hasTrademarks === 'Yes' || data.hasTrademarks === 'In Progress') ? `<div class="field"><span class="field-label">Trademark Details:</span> <span class="field-value">${sanitize(data.trademarkDetails)}</span></div>` : ''}
  </div>

  <div class="section">
    <h2>Current Operations</h2>
    <div class="field"><span class="field-label">Years Active:</span> <span class="field-value">${sanitize(data.yearsActive) || 'Not specified'}</span></div>
    <div class="field"><span class="field-label">Monthly Revenue:</span> <span class="field-value">${sanitize(data.monthlyRevenue) || 'Not specified'}</span></div>
    <div class="field"><span class="field-label">Revenue Streams:</span></div>
    <div>${(data.revenueStreams || []).map(s => `<span class="tag">${sanitize(s)}</span>`).join('') || 'None specified'}</div>
    <div class="field"><span class="field-label">Has Team:</span> <span class="field-value">${sanitize(data.hasTeam) || 'Not specified'}</span></div>
    ${data.hasTeam === 'Yes' ? `<div class="field"><span class="field-label">Team Details:</span> <span class="field-value">${sanitize(data.teamDetails)}</span></div>` : ''}
    <div class="field"><span class="field-label">Has Manager:</span> <span class="field-value">${sanitize(data.hasManager) || 'Not specified'}</span></div>
    ${data.hasManager === 'Yes' ? `<div class="field"><span class="field-label">Manager Details:</span> <span class="field-value">${sanitize(data.managerDetails)}</span></div>` : ''}
  </div>

  <div class="section">
    <h2>Existing Deals</h2>
    <div class="field"><span class="field-label">Distribution Deal:</span> <span class="field-value">${sanitize(data.hasDistributionDeal) || 'Not specified'}</span></div>
    ${data.hasDistributionDeal === 'Yes' ? `
    <div class="field"><span class="field-label">Distributor:</span> <span class="field-value">${sanitize(data.distributorName)}</span></div>
    <div class="field"><span class="field-label">Terms:</span> <span class="field-value">${sanitize(data.distributionTerms)}</span></div>
    ` : ''}
    <div class="field"><span class="field-label">Publishing Deal:</span> <span class="field-value">${sanitize(data.hasPublishingDeal) || 'Not specified'}</span></div>
    ${data.hasPublishingDeal === 'Yes' ? `
    <div class="field"><span class="field-label">Publisher:</span> <span class="field-value">${sanitize(data.publisherName)}</span></div>
    <div class="field"><span class="field-label">Terms:</span> <span class="field-value">${sanitize(data.publishingTerms)}</span></div>
    ` : ''}
    <div class="field"><span class="field-label">Sync Deals:</span> <span class="field-value">${sanitize(data.hasSyncDeals) || 'Not specified'}</span></div>
    ${data.hasSyncDeals === 'Yes' ? `<div class="field"><span class="field-label">Details:</span> <span class="field-value">${sanitize(data.syncDetails)}</span></div>` : ''}
    <div class="field"><span class="field-label">Label Deal:</span> <span class="field-value">${sanitize(data.hasLabelDeal) || 'Not specified'}</span></div>
    ${(data.hasLabelDeal === 'Yes' || data.hasLabelDeal === 'Previously') ? `<div class="field"><span class="field-label">Details:</span> <span class="field-value">${sanitize(data.labelDetails)}</span></div>` : ''}
  </div>

  <div class="section">
    <h2>Music Catalog</h2>
    <div class="field"><span class="field-label">Total Tracks:</span> <span class="field-value">${sanitize(data.totalTracks) || '0'}</span></div>
    <div class="field"><span class="field-label">Released:</span> <span class="field-value">${sanitize(data.releasedTracks) || '0'}</span></div>
    <div class="field"><span class="field-label">Unreleased:</span> <span class="field-value">${sanitize(data.unreleasedTracks) || '0'}</span></div>
    <div class="field"><span class="field-label">Owns All Masters:</span> <span class="field-value">${sanitize(data.ownsAllMasters) || 'Not specified'}</span></div>
    ${(data.ownsAllMasters === 'No' || data.ownsAllMasters === 'Partially') ? `<div class="field"><span class="field-label">Master Details:</span> <span class="field-value">${sanitize(data.masterOwnershipDetails)}</span></div>` : ''}
    <div class="field"><span class="field-label">Owns All Publishing:</span> <span class="field-value">${sanitize(data.ownsAllPublishing) || 'Not specified'}</span></div>
    ${(data.ownsAllPublishing === 'No' || data.ownsAllPublishing === 'Partially') ? `<div class="field"><span class="field-label">Publishing Details:</span> <span class="field-value">${sanitize(data.publishingOwnershipDetails)}</span></div>` : ''}
  </div>

  <div class="section">
    <h2>Goals & Support Needed</h2>
    <div class="field"><span class="field-label">Primary Goals:</span></div>
    <div>${(data.primaryGoals || []).map(g => `<span class="tag">${sanitize(g)}</span>`).join('') || 'None specified'}</div>
    <div class="field"><span class="field-label">Short-term Goals:</span> <span class="field-value">${sanitize(data.shortTermGoals) || 'Not provided'}</span></div>
    <div class="field"><span class="field-label">Long-term Goals:</span> <span class="field-value">${sanitize(data.longTermGoals) || 'Not provided'}</span></div>
    <div class="field"><span class="field-label">Support Needed:</span></div>
    <div>${(data.expectedSupport || []).map(s => `<span class="tag">${sanitize(s)}</span>`).join('') || 'None specified'}</div>
  </div>

  <div class="section">
    <h2>Additional Info</h2>
    <div class="field"><span class="field-label">How They Found HLPFL:</span> <span class="field-value">${sanitize(data.howDidYouHear) || 'Not specified'}</span></div>
    <div class="field"><span class="field-label">Additional Notes:</span> <span class="field-value">${sanitize(data.additionalNotes) || 'None'}</span></div>
  </div>

  <div class="footer">
    <p>This questionnaire was submitted through hlpflrecords.com</p>
    <p>Submitted at: ${new Date().toISOString()}</p>
  </div>
</body>
</html>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'HLPFL Records <noreply@hlpflrecords.com>',
        to: ['submissions@hlpflrecords.com'],
        reply_to: data.email,
        subject: `New Artist Questionnaire: ${data.artistName}`,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const data: QuestionnaireData = await request.json()

    // Validate required fields
    if (!data.artistName || !data.email) {
      return NextResponse.json(
        { success: false, error: 'Artist name and email are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    // Send email
    const emailSent = await sendEmailWithResend(data)

    if (!emailSent) {
      // Log for debugging but still accept submission
      console.log('Email delivery failed, but submission recorded:', {
        artistName: data.artistName,
        email: data.email,
        timestamp: new Date().toISOString()
      })
    }

    // Log the submission
    console.log('Questionnaire submission received:', {
      artistName: data.artistName,
      email: data.email,
      timestamp: new Date().toISOString(),
      emailSent
    })

    return NextResponse.json({
      success: true,
      message: 'Your questionnaire has been submitted successfully. We will review your information and get back to you within 2-3 business days.'
    })

  } catch (error) {
    console.error('Questionnaire submission error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

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
