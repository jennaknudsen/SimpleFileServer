const express = require('express');
const http = require('http');
const app = express();
require('dotenv').config();

const static_directory = process.env.STATIC_DIRECTORY;
const port = process.env.PORT;

// use the static directory to serve static html files
app.use(express.static(static_directory));

// start the express server
const server = http.createServer(app).listen(port, () => {
    console.log(`HTTPS listening on port ${port}`);
});
