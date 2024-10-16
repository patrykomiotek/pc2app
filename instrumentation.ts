export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // await import('../sentry.server.config');
    const { BaselimeSDK, VercelPlugin, BetterHttpInstrumentation } =
      await import("@baselime/node-opentelemetry");

    const sdk = new BaselimeSDK({
      serverless: true,
      service: "pcapp2",
      instrumentations: [
        new BetterHttpInstrumentation({
          plugins: [
            // Add the Vercel plugin to enable correlation between your logs and traces for projects deployed on Vercel
            new VercelPlugin(),
          ],
        }),
      ],
    });

    sdk.start();
  }

  // if (process.env.NEXT_RUNTIME === 'edge') {
  //   await import('../sentry.edge.config');
  // }
}
