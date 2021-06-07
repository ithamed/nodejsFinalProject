require('./config/mongoose')
const express = require('express');
const app = express()
const router = require('./config/routers')
const path = require('path')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(router)


app.listen(8000)