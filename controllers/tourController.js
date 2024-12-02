const Tour = require('../models/tourModel');

// Lấy danh sách tất cả các tour
exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm một tour mới
exports.addTour = async (req, res) => {
    const { name, image } = req.body;

    const newTour = new Tour({
        name,
        image
    });

    try {
        const savedTour = await newTour.save();
        res.status(201).json(savedTour);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
