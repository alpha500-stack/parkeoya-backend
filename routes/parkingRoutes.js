const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { createParking, getNearbyParkings } = require('../controllers/parkingController');

router.post('/', auth, createParking);
router.get('/', auth, getNearbyParkings);

module.exports = router;
