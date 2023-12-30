const mongoose = require("mongoose")
const foodItemSchema  = new mongoose.Schema({
    foodItem:{
        type:String,
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
    },
    visitHistory:[{timestamp:{type:Number}}],
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{ timestamps:true});

const foodItem = mongoose.model("foodItem",foodItemSchema)

module.exports = foodItem;