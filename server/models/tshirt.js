const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tshirtSchema = new Schema({
    shirtType: String,
    colorId: String,
    upc: Number,
    sizeId: String
});

module.exports = mongoose.model('Tshirt', tshirtSchema);