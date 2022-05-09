const { Feed, Post } = require('../models')

const getFeeds = async (req, res) => {
  try {
    const feeds = await Feed.findAll()
    res.send(feeds)
    console.log('yo')
  } catch (error) {
    throw error
  }
}

const getFeedPosts = async (req, res) => {
  try {
    let feedId = parseInt(req.params.feed_id)
    const posts = await Post.findAll({
      where: [{ feedId: feedId }]
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getFeeds,
  getFeedPosts

}