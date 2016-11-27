const express = require('express');
const debug = require('debug')('app:server');
const config = require('../Config');

const app = express();

// configure express
config.express(app); 

// connect to database
require('../Lib/db')(config.app.mongo);

// start the server
app.listen(app.get('port'), () => {
    debug(`server started on port ${app.get('port')}`);
});