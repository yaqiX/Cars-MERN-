const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand:{type:String, required:true},
    color:{type:String, required:true},
    year:{type:Int32Array, required:true},
    cleanEnergy:{type:Boolean, required:true},
})

const Car = mongoose.model('Car',carSchema)
module.exports = Car;