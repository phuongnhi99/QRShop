const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin = new Schema({
    /* username - unique index */
    username: { type: String, require: true, minlength: 6 },

    /* password is hashed by bcrypt */
    password: { type: String, require: true, minlength: 6 },

    name: { type: String, require: true },

    createdAt: { type: Date, require: true, default: new Date },

    modifiedAt: { type: Date, require: true, default: new Date },

})

admin.methods.setPassword = function (password) {
    this.password = bcrypt.hashSync(password, 10)
}

admin.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}
 module.exports = mongoose.model('admins', admin)