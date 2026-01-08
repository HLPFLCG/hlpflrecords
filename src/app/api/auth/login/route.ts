import { NextRequest, NextResponse } from 'next/server';

// This is a demo login endpoint
// In production, this would integrate with Supabase Auth or Cloudflare D1

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Demo credentials check
    if (email === 'demo@hlpfl.org' && password === 'demo123') {
      // In production, you would:
      // 1. Verify credentials against Supabase or D1
      // 2. Create a JWT token or session
      // 3. Set secure HTTP-only cookies

      return NextResponse.json({
        success: true,
        user: {
          id: 'demo-artist-1',
          email: 'demo@hlpfl.org',
          artistName: 'Demo Artist',
          role: 'artist',
        },
      });
    }

    // Check against Supabase if available
    // TODO: Integrate with Supabase Auth
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // });

    return NextResponse.json({
      success: false,
      error: 'Invalid credentials',
    }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({
      success: false,
      error: 'Server error',
    }, { status: 500 });
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, {
    headers: {
      'Allow': 'POST, OPTIONS',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
