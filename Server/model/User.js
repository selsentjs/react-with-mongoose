
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    department: {
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model("User", UserSchema);