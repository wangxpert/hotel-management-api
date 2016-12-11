// Express Configuration
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(app, config) {
    
    
    // http request logging
    app.use(morgan('dev'));
     
    app.use(bodyParser.json());
    
    // set the port from config
    app.set('port', config.port);

};