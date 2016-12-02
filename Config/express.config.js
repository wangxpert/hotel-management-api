// Express Configuration
const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(app, config) {
    
    
    app.use(morgan('dev')); // http request logging
    app.use(bodyParser.json({extended: true}));
    
    // set the port from config
    app.set('port', config.port);

};