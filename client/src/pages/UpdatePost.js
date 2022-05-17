import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'


const UpdatePost = () => {
  let { post_id } = useParams()

  const [updatePost, setUpdatePost] = useState({
    name: '',
    img: '',
    description: '',
    postId: post_id,
    feedId: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.put(
      `https://noderun01.herokuapp.com/api/posts/${post_id}/1`,
      updatePost
    )
  }

  return (
    <div>
      <h2>Update Post</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className='form'
            type='text'
            name='name'
            placeholder='name'
            value={updatePost.name}
            onChange={(e) => setUpdatePost({ ...updatePost, name: e.target.value })}
          />
          <input
            className='form'
            type='text'
            name='img'
            placeholder='img'
            value={updatePost.img}
            onChange={(e) => setUpdatePost({ ...updatePost, img: e.target.value })}
          />
          <input
            className='form'
            type='text'
            name='description'
            placeholder='description'
            value={updatePost.description}
            onChange={(e) => setUpdatePost({ ...updatePost, description: e.target.value })}
          />
          <input
            className='form'
            type='integer'
            name='postId'
            placeholder='postId'
            value={updatePost.postId}
            onChange={(e) => setUpdatePost({ ...updatePost, postId: e.target.value })}
          />
          <input
            className='form'
            type='integer'
            name='feedId'
            placeholder='feedId'
            value={updatePost.feedId}
            onChange={(e) => setUpdatePost({ ...updatePost, feedId: e.target.value })}
          />
          <button className='form' type='submit'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePost