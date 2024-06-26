import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {

  const cookieHeader = request.headers.get('cookie');
 
  const cookies = Object.fromEntries(cookieHeader?.split('; ').map(c => c.split('=')) || []);
  const authToken = cookies["auth-token"];


  if (!!!authToken)
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/dashboard", "/tasks", "/home"],
};