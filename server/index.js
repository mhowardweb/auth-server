// Main starting point of the application
// We do not have access to ES6 syntax when using node
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// App Setup
// app.use sets up the middleware morgan and body parser
// morgan is a logger (debugging)
// bodyParser - parses all incoming requests as json
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port: ', port);

