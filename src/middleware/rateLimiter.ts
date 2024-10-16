import { NextRequest } from "next/server";
import rateLimit from "express-rate-limit";

export const rateLimiter = (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const ip = requestHeaders.get("x-forwarded-for") || req.ip;
  const limit = 5; // Limiting requests to 5 per minute per IP
  const windowMs = 60 * 1000; // 1 minute

  // if (!rateLimitMap.has(ip)) {
  //     rateLimitMap.set(ip, {
  //         count: 0,
  //         lastReset: Date.now(),
  //     });
  // }
  return new Promise((resolve) => resolve({ status: "ok" }));
};

// export const rateLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit IP to 100 request per window
// });
