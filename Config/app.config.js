module.exports = {
    port: process.env.PORT || 8000,
    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/hotel-booking'
    }
};