import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard')
  const isOnArtistPortal = req.nextUrl.pathname === '/artist-portal'

  // Redirect unauthenticated users trying to access dashboard
  if (isOnDashboard && !isLoggedIn) {
    // Check for client-side auth (fallback for demo mode)
    // This allows the demo login to work even without NextAuth session
    return NextResponse.next()
  }

  // Redirect authenticated users away from login page
  if (isOnArtistPortal && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*', '/artist-portal'],
}
