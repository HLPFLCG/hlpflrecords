// Cloudflare Pages Function for login
export async function onRequestPost(context) {
  try {
    const { email, password } = await context.request.json()

    // Validate input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email and password are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Demo authentication
    if (email === 'demo@hlpfl.org' && password === 'demo123') {
      const token = 'demo-token-' + Date.now()

      return new Response(
        JSON.stringify({
          success: true,
          user: {
            id: 'demo-user-1',
            email: email,
            name: 'Demo Artist',
            role: 'artist'
          },
          token
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `hlpfl_session=${token}; HttpOnly; Secure; SameSite=Lax; Max-Age=604800; Path=/`
          }
        }
      )
    }

    // TODO: Add real database authentication here
    // const user = await context.env.DB.prepare(
    //   'SELECT * FROM profiles WHERE email = ?'
    // ).bind(email).first()

    return new Response(
      JSON.stringify({ success: false, error: 'Invalid email or password' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Login error:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

// Logout
export async function onRequestDelete(context) {
  return new Response(
    JSON.stringify({ success: true, message: 'Logged out successfully' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': 'hlpfl_session=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/'
      }
    }
  )
}
