const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home')
const addProductRoutes = require('./routes/add_product')
const app = express();
const PORT = 3000;

async function start() {
    try {
        const mongoUrl = 'mongodb+srv://SYSDBA:masterkey@cluster0.fdjej.mongodb.net/productCalc';
        await mongoose.connect(mongoUrl,{useNewUrlParser: true})

        app.set('views',__dirname+'/views')
        app.use(express.urlencoded({extended:true}))

        app.use('/',homeRoutes)
        app.use('/add_product',addProductRoutes)

        

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }

}

start()