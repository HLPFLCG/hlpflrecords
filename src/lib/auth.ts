import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import Spotify from 'next-auth/providers/spotify'
import Apple from 'next-auth/providers/apple'
import Credentials from 'next-auth/providers/credentials'

export const authConfig: NextAuthConfig = {
  providers: [
    // Google OAuth
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // Facebook OAuth
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    }),
    // Spotify OAuth
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    }),
    // Apple Sign-In
    Apple({
      clientId: process.env.APPLE_ID || '',
      clientSecret: process.env.APPLE_SECRET || '',
    }),
    // Credentials (email/password fallback)
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Demo credentials for development
        if (credentials?.email === 'demo@hlpfl.org' && credentials?.password === 'demo123') {
          return {
            id: 'demo-user',
            email: 'demo@hlpfl.org',
            name: 'Demo Artist',
            image: '/images/artists/priv.svg'
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/artist-portal',
    error: '/artist-portal',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
        token.provider = account?.provider
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to dashboard after sign in
      if (url.startsWith(baseUrl)) return `${baseUrl}/dashboard`
      return baseUrl
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  trustHost: true,
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
