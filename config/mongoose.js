const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/finalExam' , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => console.log ('connect to db'))
    .catch(err => console.log(err))
