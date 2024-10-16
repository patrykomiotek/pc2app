// export async function GET() {

import { authMiddleware } from "@/middleware/authMiddleware";
import { rateLimiter } from "@/middleware/rateLimiter";
import { NextRequest, NextResponse } from "next/server";

// }

export async function POST(request: NextRequest) {
  await rateLimiter(request);

  try {
    await authMiddleware(request);
    console.log({ request });
    return NextResponse.json({ status: "ok" });
  } catch {
    return NextResponse.json({ status: "fail" }, { status: 403 });
  }
}
