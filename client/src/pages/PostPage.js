import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PostPage = () => {
  let { postId } = useParams()
  const [comments, setComments] = useState()
  const [post, setPost] = useState({})

  const getPost = async () => {
    try {
      const post = await axios.get(`http://localhost:3001/api/posts/${postId}/1`)
      console.log('post', post.data)
      setPost(post.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getCommentsByPost = async () => {
    try {
      const comments = await axios.get(`http://localhost:3001/api/comments/${postId}`)
      console.log('comments', comments.data)
      setComments(comments.data)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    // let selectedPost = posts.find(
    //   (post) => post.id === parseInt(id)
    // )


    getCommentsByPost()
    getPost()
    // selectedPost()
  }, [postId])

  return (

    <div>
      <div>PostPage</div>
      <div>
        <img className='postpage-img' src={post.img}></img>
        <div>
          {comments &&
            comments.map((comment) => (
              <div>
                <h2>name: {comment.name}</h2>
                <h2>description: {comment.description}</h2>
              </div>
            ))}
        </div>
      </div>
    </div >
  )
}

export default PostPage