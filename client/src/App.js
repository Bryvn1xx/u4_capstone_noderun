// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [feed, setFeed] = useState([])


  
  useEffect(() => {
    const getFeeds = async (req, res) => {
      try {
        const res = axios.get('http://localhost:3001/api/feed')
        console.log('res', feed)
        setFeed(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getFeeds()
  },[])

  return (
    <div className="App">
      <Nav />
      
        <Routes>
          <Route path="/" element={ <Home feed={feed}/> } />
        </Routes>
    </div>
  )
}

export default App
