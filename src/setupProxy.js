const { createProxyMiddleware } = require("http-proxy-middleware");

const url = "https://www.pre-onboarding-selection-task.shop";

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    "/todos",
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};
