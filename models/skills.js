const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill:Array,
    level: Array,

} ,{timestamps: true})


module.exports = mongoose.model('fullstacktest', skillSchema);

