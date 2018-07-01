const WebSocketServer = require("ws").Server;

const webSocket = new WebSocketServer({ port: 5000 });

webSocket.on("connection", ws => {
  ws.on("message", message => {
    console.log("received: %s", message);
  });
});

module.exports = webSocket;
