// Cloudflare Pages Function for login
export async function onRequestPost(context) {
  try {
    const { email, password } = await context.request.json()

    console.log('[LOGIN] Attempt for email:', email)

    // Validate input
    if (!email || !password) {
      console.log('[LOGIN] Missing email or password')
      return new Response(
        JSON.stringify({ success: false, error: 'Email and password are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Trim whitespace from email and password
    const trimmedEmail = email.trim().toLowerCase()
    const trimmedPassword = password.trim()

    console.log('[LOGIN] Trimmed email:', trimmedEmail)

    // Demo authentication (hardcoded for testing)
    if (trimmedEmail === 'demo@hlpfl.org' && trimmedPassword === 'demo123') {
      console.log('[LOGIN] Demo account authentication matched')
      const token = 'demo-token-' + Date.now()

      // Try to get user from database, fallback to hardcoded
      let user = null
      try {
        if (context.env && context.env.DB) {
          user = await context.env.DB.prepare(
            'SELECT id, email, artist_name, display_name, role FROM profiles WHERE email = ?'
          ).bind(trimmedEmail).first()
          console.log('[LOGIN] Database query result for demo:', user ? 'Found' : 'Not found')
        }
      } catch (dbError) {
        console.log('[LOGIN] Database error for demo user:', dbError.message)
      }

      const userData = user || {
        id: 'demo-user-1',
        email: trimmedEmail,
        name: 'Demo Artist',
        artist_name: 'Demo Artist',
        role: 'artist'
      }

      console.log('[LOGIN] Demo login successful for:', userData.email)

      return new Response(
        JSON.stringify({
          success: true,
          user: userData,
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
    if (trimmedEmail === 'alki@hlpfl.org' && trimmedPassword === 'alki123') {
      console.log('[LOGIN] Alki account authentication matched')
      const token = 'alki-token-' + Date.now()

      let user = null
      try {
        if (context.env && context.env.DB) {
          user = await context.env.DB.prepare(
            'SELECT id, email, artist_name, display_name, role FROM profiles WHERE email = ?'
          ).bind(trimmedEmail).first()
          console.log('[LOGIN] Database query result for alki:', user ? 'Found' : 'Not found')
        }
      } catch (dbError) {
        console.log('[LOGIN] Database error for alki user:', dbError.message)
      }

      const userData = user || {
        id: 'alki-artist-1',
        email: trimmedEmail,
        name: 'Alki',
        artist_name: 'Alki',
        role: 'artist'
      }

      console.log('[LOGIN] Alki login successful for:', userData.email)

      return new Response(
        JSON.stringify({
          success: true,
          user: userData,
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
    if (trimmedEmail === 'admin@hlpfl.org' && trimmedPassword === 'admin123') {
      console.log('[LOGIN] Admin account authentication matched')
      const token = 'admin-token-' + Date.now()

      const userData = {
        id: 'admin-1',
        email: trimmedEmail,
        name: 'HLPFL Admin',
        role: 'admin'
      }

      console.log('[LOGIN] Admin login successful for:', userData.email)

      return new Response(
        JSON.stringify({
          success: true,
          user: userData,
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
    console.log('[LOGIN] No account matched for email:', trimmedEmail)
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
