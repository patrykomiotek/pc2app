import { rateLimiter } from "@/middleware/rateLimiter";
import { NextRequest, NextResponse } from "next/server";

// publicRoutes = []
// private / protectedRoutes = []

export function middleware(request: NextRequest) {
  // await rateLimiter(req);
  const user = request.cookies.get("user");

  console.log("user: ", { user });

  if (!user && request.nextUrl.pathname.startsWith("/profile")) {
    // FIXME: url
    return NextResponse.redirect(new URL("http://localhost:3000/login"));
    // return NextResponse.redirect(new URL("/login"));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: "/profile",
// };
