import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';

const publicRoutes = ['/', '/api/public']; // Define public routes

export default function middleware(req: NextRequest, event: any) {
  const url = req.nextUrl.pathname;

  // Bypass Clerk middleware for public routes
  if (publicRoutes.some(route => url.startsWith(route))) {
    return NextResponse.next();
  }

  // Apply Clerk middleware for all other routes
  return clerkMiddleware()(req, event);
}

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except static files and internal routes
    "/", 
    "/(api|trpc)(.*)", // Match API and TRPC routes
  ],
};
