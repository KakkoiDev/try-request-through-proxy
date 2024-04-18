import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const port = 5001;

const proxyMiddleware = createProxyMiddleware({
  target: "http://localhost:5002",
});

app.use("/", proxyMiddleware);

app.listen(port, () => console.log(`Server 2 running on port ${port}...`));
