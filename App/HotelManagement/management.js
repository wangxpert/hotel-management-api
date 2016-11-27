const Hotel = require('../Models/HotelModel');
const createError = require('http-errors');

// add a new hotel
const create = function(req, res, next) {
    const data = req.body;
    
    const newHotel = new Hotel({
        name: data.name,
        city: data.city,
        address: data.address,
        rooms: []
    });

    newHotel.validate((err) => {
        if (err) 
            return next(createError(400, {data: err.errors}));
        newHotel.save(() => res.send('ok'));
    });

}

module.exports = {
    create
};