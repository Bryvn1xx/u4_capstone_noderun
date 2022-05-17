import { useState } from 'react'
import axios from "axios"

const CreatePost = () => {

  const [addPost, setAddPost] = useState({
    name: '',
    img: '',
    description: '',
    postId: null,
    feedId: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      'https://noderun01.herokuapp.com/api/posts/1',
      addPost
    )
  }


  return (
    <div>
      <h2>Create Post</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className='form'
            type='text'
            name='name'
            placeholder='name'
            value={addPost.name}
            onChange={(e) => setAddPost({ ...addPost, name: e.target.value })}
          />
          <input
            className='form'
            type='text'
            name='img'
            placeholder='img'
            value={addPost.img}
            onChange={(e) => setAddPost({ ...addPost, img: e.target.value })}
          />
          <input
            className='form'
            type='text'
            name='description'
            placeholder='description'
            value={addPost.description}
            onChange={(e) => setAddPost({ ...addPost, description: e.target.value })}
          />
          <input
            className='form'
            type='integer'
            name='postId'
            placeholder='postId'
            value={addPost.postId}
            onChange={(e) => setAddPost({ ...addPost, postId: e.target.value })}
          />
          <input
            className='form'
            type='integer'
            name='feedId'
            placeholder='feedId'
            value={addPost.feedId}
            onChange={(e) => setAddPost({ ...addPost, feedId: e.target.value })}
          />
          <button className='form' type='submit'>Create</button>
        </form>
      </div>
    </div>

  )
}

export default CreatePost