// const { getFeeds } = require('../controllers/FeedController')

const Router = require('express').Router()
const FeedRouter = require('./FeedRouter')
const controller = require('../controllers/FeedController')


Router.use('/feed', controller.getFeeds)

module.exports = Router