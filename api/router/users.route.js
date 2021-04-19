const express = require('express');
const userRoutes = express.Router();
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')
// Require Business model in our routes module
let User = require('../models/users.model');
const { useRef } = require('react');

// Defined store route
userRoutes.route('/register').post(function (req, res) {
    const input = req.body;
    try{
        
            input.password = bcrypt.hashSync(input.password, 10);

            let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'Đăng ký thành công!'});
        })
        .catch(err => {
            res.status(200).json({'user': 'Đăng ký không thành công!'});
        });
        
    }catch(err){
        res.status(200).json('Không thể đăng ký!');
    }
    
});

userRoutes.route('/login').post(async(req, res)=>{
    const input = req.body
    // console.log(input);
    try{
        const exist = await User.findOne({phone: input.phone});
        console.log(exist.password);
        if(!exist){
            res.status(200).json({'user': 'Số điện thoại không tồn tại!'});
        }
        const matchPassword = await bcrypt.compare(input.password, exist.password)
        if (!matchPassword) {
            res.status(200).json({'user': 'Mật khẩu không đúng!'});
        }
        req.user = exist;
        res.cookie('user', exist, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), httpOnly: true })
        res.json({ error: false, data: exist })
    }
    catch(err){
        res.status(200).json({'user':'Không thể đăng nhập!'});
    }
})

module.exports = userRoutes;