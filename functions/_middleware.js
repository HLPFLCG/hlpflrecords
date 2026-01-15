/**
 * Cloudflare Pages Functions Middleware
 * This middleware handles Next.js server-side rendering
 */

export async function onRequest(context) {
  const { request, env, next } = context;
  
  // Add security headers
  const response = await next();
  const newResponse = new Response(response.body, response);
  
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');
  
  return newResponse;
}