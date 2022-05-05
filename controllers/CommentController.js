const { Comment } = require('../models')
const getComments = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    const comments = await Comment.findAll({
      where: { postId: postId }
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const getComment = async (req, res) => {
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

const createComment = async (req, res) => {
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

const updateComment = async (req, res) => {
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

const destroyComment = async (req, res) => {
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
  getComments,
  getComment,
  createComment,
  updateComment,
  destroyComment
}