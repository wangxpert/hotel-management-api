const HotelManagment = require('./HotelManagement');
const createError = require('http-errors');

module.exports = function(app) {

    app.use('/hotel', HotelManagment);   

    // handle 404
    app.all('*', (req, res, next) => {
        return next(createError(404));
    });

    // handle errors
    app.use((err, req, res, next) => {        
        res.status(err.status).send({
            name: err.name,
            message: err.message,
            status: err.status,
            error: err.error
        });
    });

};