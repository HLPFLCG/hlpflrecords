/**
 * Cloudflare Pages Configuration for Next.js
 * This config tells Cloudflare Pages how to build and serve the Next.js app
 */
module.exports = {
  // Build output directory
  outputDirectory: '.next',
  
  // Build command
  buildCommand: 'npm run build',
  
  // Static files to include
  staticDirectory: 'public',
  
  // Function directory for server-side rendering
  functionsDirectory: '.next/server',
  
  // Node.js compatibility
  nodejs_compat: true,
  
  // Environment variables
  env: {
    NODE_ENV: 'production',
  },
  
  // Headers for security and caching
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
  
  // Redirects
  redirects: [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ],
};