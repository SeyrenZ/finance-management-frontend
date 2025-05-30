import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login
     * - register
     * - forgot-password
     * - public (public files like images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login|register|forgot-password|.*\\.png|.*\\.svg|.*\\.jpg|.*\\.jpeg|.*\\.gif).*)",
  ],
};
