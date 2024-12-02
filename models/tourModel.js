const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
