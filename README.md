# try-request-through-proxy

Passes requests (GET, POST and file upload/download) from `server-1` to `server-3` and back, passing through `server-2`.

![demo](/demo.gif)

## How Does It Work?

`server-2` uses `http-proxy-middleware` to proxy all the requests. That's all.

## Development

Install dependencies: `npm i`

Start servers: `npm run 1`, `npm run 2`, `npm run 3`

Web UI: `http://localhost:5000/`

## Resources

CORS: https://expressjs.com/en/resources/middleware/cors.html

HTTP Proxy Middleware: https://www.npmjs.com/package/http-proxy-middleware

Body Parser: https://www.npmjs.com/package/body-parser

Multer: https://www.npmjs.com/package/multer

Download File: https://www.slingacademy.com/article/download-file-nodejs-express/
