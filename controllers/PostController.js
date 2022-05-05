const { Post } = require('../models')

const getPosts = async (req, res) => {
  try {
    let feedId = parseInt(req.params.feed_id)
    const posts = await Post.findAll({
      where: { feedId: feedId }
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const getPost = async (req, res) => {
  try {
    let feedId = parseInt(req.params.feed_id)
    let postId = parseInt(req.params.post_id)
    const post = await Post.findAll({
      where: { id: postId, feedId: feedId}
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const createPost = async (req, res) => {
  try {
    let feedId = parseInt(req.params.feed_id)
    let newPost = {
      feedId,
      ...req.body
    }
    let post = await Post.create(newPost)
    res.send(post)
  } catch (error) {
    throw error
  }
}

const updatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let updatedPost = await Post.update(req.body, {
      where: { id: postId}
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const destroyPost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    await Post.destroy({
      where: { id: postId }
    })
    res.send({
      message: `Post with id of ${postId} has been destroyed`
    })
    } catch (error) {
      throw error
    }
  }



module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  destroyPost
}