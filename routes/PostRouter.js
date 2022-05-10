const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/:post_id/:feed_id', controller.getPost)
Router.post('/:feed_id', controller.createPost)
Router.get('/:feed_id', controller.getPosts)
Router.put('/:post_id/:feed_id', controller.updatePost)
Router.delete('/:post_id', controller.destroyPost)
module.exports = Router