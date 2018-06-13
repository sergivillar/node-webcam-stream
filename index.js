const express = require("express");
const app = express();
const ws = require("./ws");

app.get("/", function(req, res) {
  res.sendFile("./index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  req.on("data", function(chunk) {
    ws.clients.forEach(c => c.send(chunk));
  });
  req.on("end", function() {
    console.log("----- END -----");
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
