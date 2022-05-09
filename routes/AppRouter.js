const Router = require('express').Router()
// const controller = require('../controllers/FeedController')
const FeedRouter = require('./FeedRouter')
const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRouter')


Router.use('/feed', FeedRouter)
Router.use('/posts', PostRouter)
Router.use('/comments', CommentRouter)



module.exports = Router