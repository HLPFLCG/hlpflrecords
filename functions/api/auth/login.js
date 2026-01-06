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

    // Demo authentication (hardcoded for testing)
    if (email === 'demo@hlpfl.org' && password === 'demo123') {
      const token = 'demo-token-' + Date.now()

      // Try to get user from database, fallback to hardcoded
      let user = null
      try {
        if (context.env && context.env.DB) {
          user = await context.env.DB.prepare(
            'SELECT id, email, artist_name, display_name, role FROM profiles WHERE email = ?'
          ).bind(email).first()
        }
      } catch (dbError) {
        console.log('Database not available, using hardcoded demo user')
      }

      return new Response(
        JSON.stringify({
          success: true,
          user: user || {
            id: 'demo-user-1',
            email: email,
            name: 'Demo Artist',
            artist_name: 'Demo Artist',
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

    // Alki demo authentication
    if (email === 'alki@hlpfl.org' && password === 'alki123') {
      const token = 'alki-token-' + Date.now()

      let user = null
      try {
        if (context.env && context.env.DB) {
          user = await context.env.DB.prepare(
            'SELECT id, email, artist_name, display_name, role FROM profiles WHERE email = ?'
          ).bind(email).first()
        }
      } catch (dbError) {
        console.log('Database not available, using hardcoded user')
      }

      return new Response(
        JSON.stringify({
          success: true,
          user: user || {
            id: 'alki-artist-1',
            email: email,
            name: 'Alki',
            artist_name: 'Alki',
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

    // Admin demo authentication
    if (email === 'admin@hlpfl.org' && password === 'admin123') {
      const token = 'admin-token-' + Date.now()

      return new Response(
        JSON.stringify({
          success: true,
          user: {
            id: 'admin-1',
            email: email,
            name: 'HLPFL Admin',
            role: 'admin'
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

    // Invalid credentials
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
