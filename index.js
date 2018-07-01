const express = require("express");
const app = express();
const ws = require("./ws");

app.get("/", function(req, res) {
  res.sendFile("./index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  req.on("data", chunk => {
    ws.clients.forEach(c => c.send(chunk));
  });

  req.on("end", () => {
    console.log("----- END STREAM -----");
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));
