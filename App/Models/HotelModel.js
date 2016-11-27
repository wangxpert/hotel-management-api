const mongoose = require('mongoose');

const HotelModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date
    },

    rooms: [
        {            
            roomNumber: {type: Number, required: true},
            roomType: {type: String, required: true},
            price: {type: String, required: true},
            available: {type: Number, required: true, default: 1}   
        }
    ]
});

module.exports = mongoose.model('hotel', HotelModel);