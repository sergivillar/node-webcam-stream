const WebSocketServer = require("ws").Server;

const webSocket = new WebSocketServer({ port: 5000 });

webSocket.on("connection", ws => {
  var streamHeader = new Buffer(8);
  streamHeader.write("jsmp");
  streamHeader.writeUInt16BE(320, 4);
  streamHeader.writeUInt16BE(240, 6);
  ws.send(streamHeader, { binary: true });

  ws.on("message", message => {
    console.log("received: %s", message);
  });
});

module.exports = webSocket;
