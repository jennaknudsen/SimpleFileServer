const express = require('express');
const http = require('http');
const app = express();
require('dotenv').config();

const video_static_directory = process.env.VIDEO_STATIC_DIRECTORY;
const port = process.env.PORT;

// use the static directory to serve static files
app.use("/", express.static("static/"));
app.use("/videos", express.static(video_static_directory));

// start the express server
const server = http.createServer(app).listen(port, () => {
    console.log(`HTTP listening on port ${port}`);
});

// Need to do this for some reason otherwise the whole app breaks
app.get('/test', function (req, res) {
  res.send("Response");
});
