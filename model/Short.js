const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    longUrl : {
        type : String
    },
    shortUrl : {
        type : String
    },
    clickCount : {
        type : Number,
        default : 0
    }
});

const Short=mongoose.model('shorts', userSchema);
module.exports = Short;