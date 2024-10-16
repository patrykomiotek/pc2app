import type { Metadata } from "next";
// import { HighlightInit } from "@highlight-run/next/client";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HighlightInit
        projectId={"zg0q0v0e"}
        serviceName="nextjs-app"
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      /> */}
      {children}
    </>
  );
}
