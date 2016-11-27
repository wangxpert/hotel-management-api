// mongoose setup

const mongoose = require('mongoose');
const debug = require('debug')('app:db');

module.exports = function(config) {

  // connect to database
  mongoose.connect(config.uri);

  mongoose.connection.on('connected', (err) => {
    debug(`Mongoose default connection open to ${config.uri}`);
  });

  // handle connection errors
  mongoose.connection.on('error', (err) => {
    debug(`Mongoose default connection error ${err}`);
  });


  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      debug('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

};
