const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
  
    /* password is hashed by bcrypt */
    password: { type: String, require: true, minlength: 6 },

    fullname: { type: String, require: true },

    phone: {type: Number, require: true},

})

Users.methods.setPassword = function (password) {
    this.password = bcrypt.hashSync(password, 10)
}

Users.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}
 module.exports = mongoose.model('Users', Users)