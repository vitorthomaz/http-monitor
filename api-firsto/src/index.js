const socket = require("socket.io");
const { createServer } = require("http");

const App = (port) => {
  const httpServer = createServer();
  const sktServer = socket(httpServer);

  sktServer.listen(port);

  sktServer.on("connect", () => {
    console.log("Somebody connected");
  });
};

module.exports = App;
