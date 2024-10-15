/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  experimental: {
    typedRoutes: true,
    instrumentationHook: true,
  },
};

export default nextConfig;
