const http = require('http');
const express = require('express');
app = express();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

app.use((req, res, next) => { 
  res.status(200).json({
    message: 'Welcome to my vida',
  });
});
