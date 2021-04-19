const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
  
    total: { type: Number, require: true},

    name: { type: String, require: true },

    status: {type: Number, require: false},

    author: {type: mongoose.Schema.Types.ObjectId, ref: 'users', require: true},

    // products: [{type: mongoose.Schema.Types.ObjectId, ref: 'products', require: true}],

    code: {type: String, require: true},


})

 module.exports = mongoose.model('products', product)