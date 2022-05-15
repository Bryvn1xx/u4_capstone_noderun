// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Nav from './components/Nav'
import PostCard from './components/PostCard'
import PostPage from './pages/PostPage'
import Support from './pages/Support'
import About from './pages/About'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import Windows from './pages/Windows'
import WindowsPostPage from './pages/WindowsPostPage'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [feed, setFeed] = useState()
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState([])
  const [windowsFeed, setWindowsFeed] = useState()


  const getFeeds = async (req, res) => {
    try {
      const feed = await axios.get('http://localhost:3001/api/feed')
      // console.log('feeds', feed.data)
      setFeed(feed.data)
    } catch (err) {
      console.log('err', err)
    }
  }

  const getWindowsFeed = async (req, res) => {
    try {
      const windowsFeed = await axios.get(`http://localhost:3001/api/posts/2`)
      console.log('windowsfeed', windowsFeed)
      setWindowsFeed(windowsFeed.data)
    } catch (err) {
      console.log(err)
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
    getWindowsFeed()
  }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home feed={feed} posts={posts} />} />
        <Route path='/posts/:postId' element={<PostPage posts={posts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/updatepost/:post_id' element={<UpdatePost />} />
        <Route path='/windowsfeed' element={<Windows windowsFeed={windowsFeed} />} />
        <Route path='/windowsfeed/posts/:postId' element={<WindowsPostPage />} />
      </Routes>
    </div >
  )
}

export default App
