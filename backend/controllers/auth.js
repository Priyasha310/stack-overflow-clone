const User = require('../models/auth');

const register = async(req, res, next)=>{
    const {name, email,  password} = req.body;

    if(!name || !email || !password){
      return res.status(400).json({msg:'Please provide required information',  status: false })
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.status(409).json({ msg: "Email already used", status: false });

    
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res
        .status(200)
        .json({msg: "Successfully created profile", status:true,  user, token})

}

const login = async(req, res, next)=>{
    const {email, password} = req.body;
    
    if(!email || !password){
        return res.json({msg:'Please povide your credentials', status:false})
    }
    
    //compare password
    const user = await User.findOne({email})
    if(!user){
        return res.json({msg:'Invalid credentials', status:false})
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        return res.json({msg:'Invalid credentials', status:false})
    }
    const token = user.createJWT();
    res
        .status(200)
        .json({msg: "Successfully logged in", status:true,  user, token})

}

module.exports = {register, login}