const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        default: ""
    }
}, {
   timestamps: true 
})

const User = mongoose.model("User", userSchema)

module.exports = User