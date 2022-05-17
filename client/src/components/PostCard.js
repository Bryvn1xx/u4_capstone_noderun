import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  let navigate = useNavigate()



  const deletePost = async (postId) => {
    await axios.delete(`https://noderun01.herokuapp.com/api/posts/${postId}`)
    navigate('/about')
  }


  return (
    <div className='postcard-summary'>
      <div className='postcard-container'>
        <Link to={`/posts/${post.id}`} >
          <img className='postcard-img' src={post.img} alt='404'></img>
        </Link>
        <h2 className='post-name'>{post.name}</h2>
        <div className='homepage-buttons'>
          <button className='dlt-btn' onClick={() => deletePost(post.id)}>Delete</button>
          <Link className='edt-btn' to={`/updatepost/${post.id}`}>Edit</Link>

        </div>
      </div>
    </div>
  )
}

export default PostCard