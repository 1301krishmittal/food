const foodItem = require('../models/fooditem');
const { response } = require("express");

async function handleGenerateNewOrder(req,res){
    const body = req.body;
    console.log(body)
    // if(!body.url) return res.status(400).json({error:'url is required'})
    await foodItem.create({
        foodItem:body.fooditems,
        quantity:body.quantity,
        visitHistory:{timestamp:Date.now()},
        createdBy: req.user._id,
    });
    return res.render('home',{
        fooditem:body.fooditems,
        quantity:body.quantity
    })
}


module.exports = {
    handleGenerateNewOrder,
}
