const HotelManagment = require('./HotelManagement');
const createError = require('http-errors');

module.exports = function(app) {

    app.use('/hotels', HotelManagment);   

    // handle 404
    app.all('*', (req, res, next) => {
        return next(createError(404));
    });

    // handle errors
    app.use((err, req, res, next) => {
        res.status(err.status || 500).send({
            name: err.name,
            message: err.message,
            status: err.status || 500,
            error: err.error
        });
    });

};