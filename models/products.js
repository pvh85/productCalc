const {Schema,model} = require('mongoose')

const product = new Schema({
    name: {
        type: String,
        required: true
    },
    energy: {
        type: Number,
        default: 0

    },
    protein: {
        type: Number,
        default: 0
    },
    fat: {
        type: Number,
        default: 0
    },
    carbohydrates: {
        type: Number,
        default: 0
    }



})

module.exports = model('Product', product)