import { NextRequest } from "next/server";
// import rateLimit from "express-rate-limit";

const rateLimitMap = new Map();

export const rateLimiter = (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const ip = requestHeaders.get("x-forwarded-for") || req.ip;
  const limit = 5; // Limiting requests to 5 per minute per IP
  const windowMs = 60 * 1000; // 1 minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    });
  }

  const ipData = rateLimitMap.get("ip");
  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  if (ipData.count >= limit) {
    // new Promise || response.status(404).statusText('too many requests')
    // TODO: return promise or response
    // return
  }

  ipData.count += 1;

  // TODO: return resolved promise

  return new Promise((resolve) => resolve({ status: "ok" }));
};

// export const rateLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit IP to 100 request per window
// });
