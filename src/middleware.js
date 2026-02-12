import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isPublicPath =
    pathname === "/signin" || pathname === "/signup";

  // Better Auth session cookie
  const sessionCookie =
    request.cookies.get("better-auth.session_token");

  const isSignedIn = !!sessionCookie;

  if (isPublicPath && isSignedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !isSignedIn) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/enlist", "/signin", "/signup"],
};
