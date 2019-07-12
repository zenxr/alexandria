const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const mongoDbConfig = require('./mongoDbConfig');
const authorRoutes = require('./api/authorRoutes');

const port = 3000;

// Set up default mongoose connection
mongoose.connect(mongoDbConfig.DBString);

// mongoose promise deprecated, overide it with node's promise
mongoose.Promise = global.Promise;

// Get the connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDb connection error:'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/authors', authorRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}`));