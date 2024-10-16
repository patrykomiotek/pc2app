import { NextRequest, NextResponse } from "next/server";

const TOKEN = "abc";

export const authMiddleware = (req: NextRequest) => {
  return new Promise((resolve, reject) => {
    const authHeader = req.headers.get("authorization");
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      if (token === TOKEN) {
        resolve({ status: "ok" });
      } else {
        reject(new Error("Invalid token"));
      }
    } else {
      reject(new Error("Token not found"));
    }
  });
};
