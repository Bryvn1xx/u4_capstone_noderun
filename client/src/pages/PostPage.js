import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PostPage = () => {
  let { postId } = useParams()
  const [comments, setComments] = useState()
  const [post, setPost] = useState({})
  const [likes, setLikes] = useState(0)
  let navigate = useNavigate()
  const [addComment, setAddComment] = useState({
    name: '',
    description: '',
    postId: postId
  })

  const getPost = async () => {
    try {
      const post = await axios.get(`https://noderun01.herokuapp.com/api/posts/${postId}/1`)
      console.log('post', post.data[0])
      setPost(post.data[0])
    } catch (err) {
      console.log(err)
    }
  }

  const getCommentsByPost = async () => {
    try {
      const comments = await axios.get(`https://noderun01.herokuapp.com/api/comments/${postId}`)
      console.log('comments', comments.data)
      setComments(comments.data)
    } catch (err) {
      console.log(err)
    }
  }
  // const deleteComment = async () => {
  //   await axios.delete(`http://localhost:3001/api/comments/${comment.id}`)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      `https://noderun01.herokuapp.com/api/comments/${postId}`,
      addComment
    )
    navigate(`/`)

  }

  useEffect(() => {
    getCommentsByPost()
    getPost()
    // selectedPost()
  }, [postId])
  console.log(post)

  return (

    <div>
      <div className='postpage-bar'>
        <h2>PostPage</h2>
        <h2>{post.name}</h2>
      </div >
      <div className='postpage-main'>

        <img className='postpage-img' src={post.img} />

        <div className='comments-block'>
          {comments &&
            comments.map((comment) => (
              <div>
                <h2 className='comment-post'>{comment.name}:</h2>
                <h2 className='comment-post-desc'>{comment.description}</h2>
              </div>
            ))}
        </div>
        <div className='box'>
          <h2 className='create-comment'>Create Comment</h2>
          <div className='create-comment-form'>
            <form className='create-comment-form' onSubmit={handleSubmit}>
              <input
                className='form'
                type='text'
                name='name'
                placeholder='Name'
                value={addComment.name}
                onChange={(e) => setAddComment({ ...addComment, name: e.target.value })}
              />
              <input
                className='form'
                type='text'
                name='description'
                placeholder='Description'
                value={addComment.description}
                onChange={(e) => setAddComment({ ...addComment, description: e.target.value })}
              />
              <input
                className='form'
                type='text'
                name='postId'
                placeholder='postId'
                value={addComment.postId}
                onChange={(e) => setAddComment({ ...addComment, postId: e.target.value })}
              />
              <button className='form' type='submit'>Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PostPage