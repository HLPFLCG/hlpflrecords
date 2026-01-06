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
            artist_name: 'Demo Artist',
            role: 'artist'
          }
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Alki verification
    if (token.startsWith('alki-token-')) {
      return new Response(
        JSON.stringify({
          success: true,
          authenticated: true,
          user: {
            id: 'alki-artist-1',
            email: 'alki@hlpfl.org',
            name: 'Alki',
            artist_name: 'Alki',
            role: 'artist'
          }
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Admin verification
    if (token.startsWith('admin-token-')) {
      return new Response(
        JSON.stringify({
          success: true,
          authenticated: true,
          user: {
            id: 'admin-1',
            email: 'admin@hlpfl.org',
            name: 'HLPFL Admin',
            role: 'admin'
          }
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Invalid token
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
