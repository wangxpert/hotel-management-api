const mongoose = require('mongoose');

// adding validation to the schema
const validate = require('mongoose-validator');

// creating the model schema
const HotelModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        validate: validate({validator: 'isLength', arguments: [3, 50], message: 'Name length must be between 3 and 50'})
    },

    city: {
        type: String,
        required: true,
        validate: validate({validator: 'isLength', arguments: [2, 50], message: 'City length must be between 2 and 50'})
    },

    address: {
        type: String,
        required: true,
        validate: validate({validator: 'isLength', arguments: [5, 50], message: 'address length must be between 2 and 50'})
    },

    createdAt: {
        type: Date,
        required: true,
        default: new Date(),
    }
});

// exporting the model
module.exports = mongoose.model('hotel', HotelModel);