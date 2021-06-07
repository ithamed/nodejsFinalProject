const { Feed } = require('../models/Feed')
const homePage = (req, res) => {
    if(req.method === 'GET') {
        Feed.find()
            .then(result => res.render('index', { result, error:null }))
            .catch(err => console.log(err))  
    }
    if(req.method === 'POST') {
        const feed = new Feed(req.body)
        feed.save()
            .then(result => res.redirect('/feed'))
            .catch(err =>{
                Feed.find()
                    .then(result => res.render('index', { result, error: err.errors }))
            } ) 
    }    
}
const showOne = (req, res) => {
    Feed.findById({ _id: req.params.id})
        .then(result => res.render('showOne', { result }))
        .catch(err => console.log(err))  
}
const UpdateOnePost = (req, res) => {
    if(req.method === 'GET') {
        Feed.findById({ _id: req.params.id})
        .then(result => res.render('updateOnePost', { result }))
        .catch(err => console.log(err))  
    }
    
    if(req.method === 'POST') {
        Feed.findByIdAndUpdate( { _id: req.params.id } )
        .then(result => {
            result.title= req.body.title;
            result.post= req.body.post;
            result.save()
                .then(result => res.redirect('/feed/'+ req.params.id))
                .catch(err => console.log(err)) 
        })
        .catch(err => console.log(err)) 
    }
}
const deleteOnePost = (req, res) => {
    Feed.findByIdAndDelete({ _id: req.params.id})
        .then(result => res.redirect('/feed'))
        .catch(err => console.log(err))  
}  


module.exports = {
    homePage,
    showOne,
    UpdateOnePost,
    deleteOnePost
}