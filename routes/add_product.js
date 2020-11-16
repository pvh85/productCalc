const {
    Router
} = require('express')
const path = require('path')
const router = Router()
const Product = require('../models/products')

router.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', '/views/add_product.html')
    )
})

router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.title,
        energy: req.body.energy,
        protein: req.body.protein,
        fat: req.body.fat,
        carbohydrates: req.body.carbohydrates
    })
    try {
        await product.save()
        res.redirect('./')
    } catch (err) {
        console.log(err)
    }
})


module.exports = router