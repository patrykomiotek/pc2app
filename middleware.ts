import { rateLimiter } from "@/middleware/rateLimiter";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // await rateLimiter(req);

  return NextResponse.next();
}
