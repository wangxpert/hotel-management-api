// mongoose setup

const mongoose = require('mongoose');

module.exports = function(config) {

  // connect to database
  mongoose.connect(config.uri);

  mongoose.connection.on('connected', (err) => {
    console.log(`Mongoose default connection open to ${config.uri}`);
  });

  // handle connection errors
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error ${err}`);
  });


  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

};
