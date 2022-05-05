const { Feed } = require('../models')



const getFeeds = async (req, res) => {
  try {
    const feeds = await Feed.findAll()
    res.send(feeds)
    console.log('yo')
  } catch (error) {
    throw error
  }
}


module.exports = {
  getFeeds
}