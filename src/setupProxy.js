const { legacyCreateProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/action/*',
    legacyCreateProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/*',
    legacyCreateProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};