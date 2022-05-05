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
    let postId = parseInt(req.params.post_id)
    let commentId = parseInt(req.params.comment_id)
    const comment = await Comment.findAll({
      where: { id: commentId, postId: postId}
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const createComment = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let newComment = {
      postId,
      ...req.body
    }
    let comment = await Comment.create(newComment)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const updateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId}
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const destroyComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({
      where: { id: commentId }
    })
    res.send({
      message: `Comment with the id of ${commentId} has been destroyed`
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