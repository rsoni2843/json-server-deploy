// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = 8080 || 3001;

// https://json-server-deploy-rho.vercel.app/

server.use(middlewares);
// Add this before server.use(router)
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    "/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is runningon port", port);
});

// Export the Server API
module.exports = server;
