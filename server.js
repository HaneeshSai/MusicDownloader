const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const ytdl = require("ytdl-core");
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    subject: "hi",
    message: "fuck u",
  });
});

app.post("/download", (req, res) => {
  const link = req.body.videoUrl;

  const video = ytdl(link, { filter: "audioonly" });
  video.pipe(fs.createWriteStream("audio.mp3"));
  console.log("downloaded");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
