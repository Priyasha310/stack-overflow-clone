const mongoose = require('mongoose')
const User = require('../models/auth')

const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find();
        res.status(200).json({status:true, users})
    }catch(err){
        res.status(400).json({status:false, err})
        console.log(err);
    }
}

module.exports = {getAllUsers}