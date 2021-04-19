const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Products = new Schema({
    name: { type: String, require: true },

    price: { type: Number, require: true},

    // amount: {type: Number, require: true},

    description: {type: String, require: false},

    images: [{type: mongoose.Schema.Types.ObjectId, ref: 'images', require: false}],

    // status: {type: Number, require: false},
}, {
    collection: 'products'
});

 module.exports = mongoose.model('Products', Products)