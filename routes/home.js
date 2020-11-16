const {Router} = require('express')
const path = require('path')
const Product = require('../models/products')
const router = Router()

router.get('/',async(req,res)=>{
    const products = await Product.find()
    res.send(products)
})



module.exports = router