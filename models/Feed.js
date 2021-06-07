const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength:[15,'the title should NOT be longer than 15']
    },
    post:{
        type: String,
        required: true,
        maxLength:[40,'the post should NOT be longer than 40']
    }
}, {timestamps: true})

const Feed = mongoose.model('Feed', feedSchema)

module.exports = {
    Feed
}