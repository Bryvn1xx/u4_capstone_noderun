const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/:post_id', controller.getComments)
Router.post('/:post_id', controller.createComment)
Router.put('/:comment_id/:post_id', controller.updateComment)
Router.delete('/:comment_id', controller.destroyComment)
module.exports = Router