const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middle = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middle);
server.use(router);
server.listen(port);
