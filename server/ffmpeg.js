const spawn = require("child_process").spawn;

let ffmpeg;

const startFfmpeg = () => {
  if (ffmpeg) {
    return;
  }

  const args = [
    "-s",
    "1280x720",
    "-r",
    "33",
    "-f",
    "avfoundation",
    "-i",
    "1",
    "-f",
    "webm",
    "-codec:v",
    "libvpx",
    "-deadline",
    "realtime",
    "-b:v",
    "600k",
    "-maxrate",
    "600k",
    "-bufsize",
    "1200k",
    "-qmin",
    "10",
    "-qmax",
    "42",
    "http://localhost:3000"
  ];

  ffmpeg = spawn("ffmpeg", args);

  ffmpeg.on("exit", () => {
    console.log("Killed ffmpeg");
  });

  ffmpeg.stderr.on("data", data => {
    console.log("ffmpeg: " + data);
  });
};

const stopFfmpg = () => {
  if (ffmpeg) {
    ffmpeg.kill("SIGKILL");
    ffmpeg = null;
  }
};

module.exports = { startFfmpeg, stopFfmpg };
