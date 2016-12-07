const Hotel = require('../Models/HotelModel');
const createError = require('http-errors');

// add a new hotel to db
const createHotel = (req, res, next) => {

    const data = req.body;
   
    // create new hotel from data
    const newHotel = new Hotel({
        name: data.name,
        city: data.city ? data.city.toLowerCase() : undefined, // store all cities in lowercase for easier searching
        address: data.address,
        rooms: []
    });
    
    // insert hotel into db
    newHotel.save((err) => {
        if (err) 
            return next(createError(400, err));
        
        return res.status(201).send({done: true, message: 'hotel added'})
    });

}

// search for hotels
const findHotels = (req, res, next) => {
    
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

// update single hotel
const deleteHotel = (req, res, next) => {
    const hotelID = req.params.hotelID || '';
    
    Hotel.remove({_id: hotelID}, (err) => {        
        if (err) return next(createError(500, {error: err}))
        return res.status(204).send({done: true, message: 'hotel deleted'});
    })
}

// update hotel information
const updateHotel = (req, res, next) => {
    const data = req.body;

    const hotelID = req.params.hotelID || '';

    // validate and update document
    Hotel.update({_id: hotelID}, {
        $set: {
            name: data.name,
            city: data.city ? data.city.toLowerCase() : undefined,
            address: data.address
        }
    }, {runValidators: true}, (err) => {
        if (err) return next(createError(400, err));
        return res.send({done: true, message: 'hotel updated'});
    });
}

module.exports = {
    createHotel,
    findHotels,
    deleteHotel,
    updateHotel
};