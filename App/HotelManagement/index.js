const HotelManagmentRouter = require('express').Router();
const management = require('./management');

HotelManagmentRouter.get('/', management.findHotels);
HotelManagmentRouter.post('/', management.createHotel);

HotelManagmentRouter.delete('/:hotelID', management.deleteHotel);
HotelManagmentRouter.put('/:hotelID', management.updateHotel);


module.exports = HotelManagmentRouter; 
