const Parking = require('../models/Parking');

const createParking = async (req, res) => {
    const { lat, lng } = req.body;
    const newParking = new Parking({ lat, lng, user: req.user.id });
    await newParking.save();
    res.status(201).json(newParking);
};

const getNearbyParkings = async (req, res) => {
    const { lat, lng } = req.query;
    const parkings = await Parking.find({
        lat: { $gte: parseFloat(lat) - 0.01, $lte: parseFloat(lat) + 0.01 },
        lng: { $gte: parseFloat(lng) - 0.01, $lte: parseFloat(lng) + 0.01 }
    });
    res.json(parkings);
};

module.exports = { createParking, getNearbyParkings };
