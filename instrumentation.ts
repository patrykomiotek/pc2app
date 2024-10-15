import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("pcapp2");

  // registerOTel({
  //   serviceName: 'pcapp2',
  //   traceExporter: 'otlp',
  //   spanProcessors: ['batch']
  // })
}
