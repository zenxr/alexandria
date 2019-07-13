const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const mongoDbConfig = require('./mongoDbConfig');
const api = require('./api');

const port = 3000;

//#region DB configuration
// Set up default mongoose connection
mongoose.connect(mongoDbConfig.DBString, {useNewUrlParser: true});

// mongoose promise deprecated, overide it with node's promise
mongoose.Promise = global.Promise;

// Get the connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDb connection error:'));
//#endregion

//#region bodyParser config
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//#endregion

// use api router for all /api queries
app.use('/api', api);

app.listen(port, () => console.log(`Example app listening on port ${port}`));