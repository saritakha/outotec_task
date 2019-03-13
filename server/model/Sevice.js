const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const serviceSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    requestName: {
        type: String,
        required: true
    },
    requestType: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    description: String,
    priority: {
        type: String,
        required: true
    },
    status: String
})

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;