
const User = require('../model/User');

// get all users
const getAllUsers = async(req,res) => {
    try{
       const users = await User.find();
       res.status(200).json({users, count:users.length})
    }
    catch(err){
        res.status(500).json(err)
    }
}

// get single user
const getSingleUser = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findOne({_id:id})
        res.status(200).json(user)
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// create user
const createUser = async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user)
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// update user
const updateUser = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findOneAndUpdate({_id:id}, req.body);
        res.status(200).json(user)
        
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// delete user
const deleteUser = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findOneAndDelete({_id:id})
        res.status(200).json({msg:'user deleted successfully', user})
        
    }
    catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}
