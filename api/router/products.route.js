const express = require('express');
const productRoutes = express.Router();
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')
// Require Business model in our routes module
let Product = require('../models/products.model');
const { useRef } = require('react');

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
    Product.find(function(err, products){
        if(err){
            console.log(err);
        }
        else {
            res.json(products);
        }
    });
});

module.exports = productRoutes;