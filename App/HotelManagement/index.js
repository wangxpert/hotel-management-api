const HotelManagment = require('express').Router();
const management = require('./management');

HotelManagment.get('/', management.findHotels);
HotelManagment.post('/', management.createHotel);

HotelManagment.delete('/:hotelID', management.deleteHotel);
HotelManagment.put('/:hotelID', management.updateHotel);


module.exports = HotelManagment; 
