const mongoose = require('mongoose');

const BookingModel = new mongoose.Schema({
    checkin: {
        type: Date,
        required: true
    },

    checkout: {
        type: Date,
        required: true
    },

    rooms: [{ 
        roomId: {type: String, required: true} 
    }],

    createdAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('booking', BookingSchema);