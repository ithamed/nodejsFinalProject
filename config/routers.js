const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.all('/feed', controller.homePage)
router.get('/feed/:id', controller.showOne)
router.all('/feed/edit/:id', controller.UpdateOnePost)
router.get('/delete-post/:id', controller.deleteOnePost)
module.exports = router