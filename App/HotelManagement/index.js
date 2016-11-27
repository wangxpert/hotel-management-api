const HotelManagment = require('express').Router();
const management = require('./management');

HotelManagment.post('/create', management.create);

module.exports = HotelManagment; 