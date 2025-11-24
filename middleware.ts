import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const COOKIE_NAME = 'ab-test-group'
  const BETA_URL = 'https://beta.iconroof.co.th'

  // 1. Get the bucket cookie
  let bucket = request.cookies.get(COOKIE_NAME)?.value

  // 2. If no bucket, assign one randomly (50/50 split)
  if (!bucket) {
    bucket = Math.random() < 0.5 ? 'original' : 'beta'
  }

  // 3. Handle the request based on the bucket
  let response

  if (bucket === 'beta') {
    // Create the target URL for the beta site
    const url = request.nextUrl.clone()
    const targetUrl = new URL(url.pathname + url.search, BETA_URL)
    
    // Rewrite the request to the Vercel deployment
    response = NextResponse.rewrite(targetUrl)
  } else {
    // Continue to the local Plesk app
    response = NextResponse.next()
  }

  // 4. Set the sticky cookie so the user stays in their bucket
  if (!request.cookies.has(COOKIE_NAME)) {
    response.cookies.set(COOKIE_NAME, bucket, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: 'lax',
    })
  }

  return response
}

export const config = {
  // Run on all paths to ensure assets (_next/static) and API routes 
  // are correctly proxied for the 'beta' group.
  matcher: '/:path*',
}
