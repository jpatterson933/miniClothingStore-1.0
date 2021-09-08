const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pantSchema = new Schema ({
    pantType: String,
    colorId: String,
    upc: Number,
    sizeId: String
});

module.exports = mongoose.model('Pant', pantSchema);