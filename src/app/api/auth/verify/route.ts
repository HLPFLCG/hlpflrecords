import { NextRequest, NextResponse } from 'next/server'

// Verify session endpoint
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('hlpfl_session')?.value

    if (!token) {
      return NextResponse.json(
        { success: false, authenticated: false },
        { status: 401 }
      )
    }

    // TODO: Verify token against database
    // For now, demo verification
    if (token.startsWith('demo-token-')) {
      return NextResponse.json({
        success: true,
        authenticated: true,
        user: {
          id: 'demo-user-1',
          email: 'demo@hlpfl.org',
          name: 'Demo Artist',
          role: 'artist'
        }
      })
    }

    return NextResponse.json(
      { success: false, authenticated: false },
      { status: 401 }
    )
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
