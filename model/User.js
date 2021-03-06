const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        minLength: 5,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    }
});

const User=mongoose.model('users', userSchema);
module.exports = User;