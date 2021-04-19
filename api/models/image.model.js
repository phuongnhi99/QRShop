const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
    
    name: {type: String, require: true},

    status: {type: Number, default: 1},

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'users', require: false},

    createdAt: { type: Date, require: true, default: new Date },

    modifiedAt: { type: Date, require: true, default: new Date },
})

module.exports = mongoose.model('images', image)