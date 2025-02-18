import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// protecting routes from un authorized access
const isProtectedRoute=createRouteMatcher([
  "/onboarding(.*)",
  "/organisation(.*)",
  "/project(.*)",
  "/issue(.*)",
  "/sprint(.*)",
])


//auth() returns the current authentication state of the request.
//auth().userId checks if a user is logged in.

export default clerkMiddleware((auth,req)=>{
      if(!auth().userId && isProtectedRoute(req)){    //If both conditions are true → The user is trying to access a protected route without logging in.
        return auth().redirectToSignIn();
      }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};