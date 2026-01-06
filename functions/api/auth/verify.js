// Cloudflare Pages Function for verifying session
export async function onRequestGet(context) {
  try {
    const cookies = context.request.headers.get('Cookie') || ''
    const sessionMatch = cookies.match(/hlpfl_session=([^;]+)/)
    const token = sessionMatch ? sessionMatch[1] : null

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, authenticated: false }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Demo verification
    if (token.startsWith('demo-token-')) {
      return new Response(
        JSON.stringify({
          success: true,
          authenticated: true,
          user: {
            id: 'demo-user-1',
            email: 'demo@hlpfl.org',
            name: 'Demo Artist',
            role: 'artist'
          }
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // TODO: Verify against database
    return new Response(
      JSON.stringify({ success: false, authenticated: false }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Verification error:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
