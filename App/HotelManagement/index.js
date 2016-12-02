const HotelManagment = require('express').Router();
const management = require('./management');

HotelManagment.get('/', management.find);
HotelManagment.post('/create', management.create);


module.exports = HotelManagment; 