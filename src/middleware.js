import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  // getting the current pathname
  const path = request.nextUrl.pathname;

  // if it is a public path user should not be able to access these paths
  const isPublicPath = path === '/login' || path === '/signup';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}


// On what route you want to run your middleware
export const config = {
  matcher: [
    '/enlist', // protected route
    '/login',
    '/signup'
  ]
}