/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  experimental: {
    typedRoutes: true,
    instrumentationHook: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.ignoreWarnings = [{ module: /opentelemetry/ }];
    }
    return config;
  },
};

export default nextConfig;
