const Hotel = require('../Models/HotelModel');
const createError = require('http-errors');

// add a new hotel to db
const create = function(req, res, next) {
    
    const data = req.body;
    
    // create new hotel from data
    const newHotel = new Hotel({
        name: data.name,
        city: data.city.toLowerCase(),
        address: data.address,
        rooms: []
    });

    // validate hotel data 
    newHotel.validate((err) => {
        if (err) 
            return next(createError(400, {error: err.errors}));
        
        // insert hotel into db
        newHotel.save((err) => {
            if (err) 
                return next(createError(400, {error: err}));
            
            return res.send({done: true, message: 'hotel added'})
        });

    });

}

// search for hotels
const find = function(req, res, next) {
    
    // search query
    const query = {
        city: req.query.city.toLowerCase()
    };

    // return only these fields from the document + the _id
    const projection = { 
        name: true, 
        city: true, 
        address: true
    };

    Hotel.find(query, projection, (err, doc) => {
        if (err) return next(createError(500));
        return res.status(200).send(doc);
    })

};

module.exports = {
    create,
    find
};