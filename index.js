const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({ port: 5000 });

wss.on("connection", function(ws) {
  ws.on("message", function(message) {
    console.log("received: %s", message);
  });
  setInterval(() => ws.send(`${new Date()}`), 1000);
});

app.get("/", function(req, res) {
  res.sendFile("./index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  console.log("GETTING DATA POST");
  console.log(req);
  req.on("data", function(chunk) {
    // console.log("data");
    // console.log(chunk);
    // data += chunk;
  });
  req.on("end", function() {
    console.log("-----");
    // console.log("hdr", req.headers["content-type"]);
    // console.log("raw", JSON.parse(data));
  });
  //   res.sendStatus(200);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
