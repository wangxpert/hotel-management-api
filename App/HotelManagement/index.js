const HotelManagment = require('express').Router();
const management = require('./management');

HotelManagment.post('/add', management.add);

module.exports = HotelManagment; 