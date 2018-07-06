const express = require("express");
const app = express();
const path = require("path");
const WebSocketServer = require("ws").Server;
const { startFfmpeg, stopFfmpg } = require("./ffmpeg");

const webSocket = new WebSocketServer({ port: 5000 });

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.post("/", (req, res) => {
  req.on("data", chunk => {
    webSocket.clients.forEach(c => c.send(chunk));
  });

  req.on("end", () => {
    console.log("----- END STREAM -----");
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));

webSocket.on("connection", ws => {
  console.log("Client connected");

  startFfmpeg();

  ws.on("message", message => {
    console.log("received: %s", message);
  });

  ws.on("close", function close() {
    console.log("disconnected");
    stopFfmpg();
  });
});
