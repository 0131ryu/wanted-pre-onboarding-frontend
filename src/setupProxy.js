const { createProxyMiddleware } = require("http-proxy-middleware");

const url = "https://www.pre-onboarding-selection-task.shop";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth", {
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/todos", {
      target: url,
      changeOrigin: true,
    })
  );
};
