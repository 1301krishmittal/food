const {handleGenerateNewOrder} = require("../controllers/fooditem");
const express = require('express');
const router = express.Router();
const URL = require('../models/fooditem');


router.post('/',handleGenerateNewOrder);

module.exports = router;


 