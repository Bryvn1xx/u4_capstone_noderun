import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  let navigate = useNavigate()



  const deletePost = async (postId) => {
    await axios.delete(`http://localhost:3001/api/posts/${postId}`)
    navigate('/about')
  }

  // console.log('feed', feed)
  return (
    <div className='postcard-summary'>
      <div className='postcard-container'>
        <Link to={`/posts/${post.id}`} >
          <img className='postcard-img' src={post.img} alt='404'></img>
        </Link>
        <div>{post.name}</div>
        <div className='homepage-buttons'>
          <button className='dlt-btn' onClick={() => deletePost(post.id)}>Delete</button>
          <Link className='edt-btn' to={`/updatepost/${post.id}`}>Edit</Link>

        </div>
      </div>
    </div>
  )
}

export default PostCard