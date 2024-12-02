const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// Lấy danh sách các tour
router.get('/', tourController.getAllTours);

// Thêm một tour mới
router.post('/', tourController.addTour);

module.exports = router;
