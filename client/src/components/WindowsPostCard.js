import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const WindowsPostCard = ({ windowsPost }) => {
  let navigate = useNavigate()



  const deletePost = async (postId) => {
    await axios.delete(`http://localhost:3001/api/posts/${postId}`)
    navigate('/about')
  }

  // console.log('feed', feed)
  return (
    <div className='postcard-summary'>
      <div className='postcard-container'>
        <Link to={`/windowsfeed/posts/${windowsPost.id}`} >
          <img className='postcard-img' src={windowsPost.img} alt='404'></img>
        </Link>
        <div>{windowsPost.name}</div>
        <div className='homepage-buttons'>
          <button className='dlt-btn' onClick={() => deletePost(windowsPost.id)}>Delete</button>
          <Link className='edt-btn' to={`/updatepost/${windowsPost.id}`}>Edit</Link>

        </div>
      </div>
    </div>
  )
}

export default WindowsPostCard