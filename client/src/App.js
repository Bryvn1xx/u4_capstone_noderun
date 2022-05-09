// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Nav from './components/Nav'
import PostCard from './components/PostCard'
import PostPage from './pages/PostPage'
import About from './pages/About'
import CreatePost from './pages/CreatePost'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [feed, setFeed] = useState()
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState([])

  // const getCommentsByPost = async () => {
  //   try {
  //     const comments = await axios.get(`http://localhost:3001/api/comments/1`)
  //     // console.log('comments', comments.data)
  //     setComments(comments.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  const getFeeds = async (req, res) => {
    try {
      const feed = await axios.get('http://localhost:3001/api/feed')
      // console.log('feeds', feed.data)
      setFeed(feed.data)
    } catch (err) {
      console.log('err', err)
    }
  }
  const getPostsByFeed = async (req, res) => {
    try {
      const posts = await axios.get(`http://localhost:3001/api/posts/1`)
      // console.log('posts', posts.data)
      setPosts(posts.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getFeeds()
    getPostsByFeed()
    // getCommentsByPost()
  }, [])

  return (
    <div className="App">
      <Nav />
      {/* <PostCard feed={feed} posts={posts} /> */}
      <Routes>
        <Route path="/" element={<Home feed={feed} posts={posts} />} />
        <Route path='/posts/:postId' element={<PostPage posts={posts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/createpost' element={<CreatePost />} />
      </Routes>
    </div >
  )
}

export default App
