import { createProxyMiddleware } from 'http-proxy-middleware';

const BACKEND_URL = 'https://esitef-homologacao.softwareexpress.com.br';

export default function (app: {
  use: (
    arg0: string,
    arg1: import('http-proxy-middleware').RequestHandler,
  ) => void;
}) {
  app.use(
    '/e-sitef/api/v1',
    createProxyMiddleware({
      target: BACKEND_URL,
      pathRewrite: { '^/e-sitef/api/v1': '/' },
      changeOrigin: true,
    }),
  );
}
