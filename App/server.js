const express = require('express');
const config = require('../Config');

const app = express();

// configure express
config.express(app, config.app); 

// connect to database
require('../Lib/db')(config.app.mongo);

// add the routes
require('./routes')(app);

// start the server
app.listen(app.get('port'), () => {
    console.log(`server started on port ${app.get('port')}`);
});