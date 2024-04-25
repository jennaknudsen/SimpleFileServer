const express = require('express');
const http = require('http');
const app = express();
require('dotenv').config();

const static_directory = process.env.STATIC_DIRECTORY;
const port = process.env.PORT;

// use the static directory to serve static html files
app.use(express.static(static_directory));

// start the express server
const server = http.createServer(app).listen(port, "0.0.0.0", () => {
    console.log(`HTTP listening on port ${port}`);
});

// Need to do this for some reason otherwise the whole app breaks
app.get('/test', function (req, res) {
  res.send("Response");
});
