const Router = require('express').Router()
const controller = require('../controllers/FeedController')

Router.get('/', controller.getFeeds)
Router.get('/:feed_id/posts', controller.getFeedPosts)

module.exports = Router