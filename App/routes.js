const HotelManagment = require('./HotelManagement');

module.exports = function(app) {

    app.use('/hotel', HotelManagment);   

    // handle 404
    app.all('*', (req, res, next) => {
        res.boom.notFound();
    });

};