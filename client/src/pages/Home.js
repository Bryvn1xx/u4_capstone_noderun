import HomeComponent from "../components/HomeComponent"
import PostCard from '../components/PostCard'
const Home = ({ feed, posts }) => {
  console.log('feed', feed)
  console.log('posts', posts)



  return (
    <div className='home-page'>
      <div className='home-block'>
        <img className='home-img' src='/noderun-logo.png'></img>
      </div>
      <h2 className='apple-logo'></h2>
      <div className='postcard-card'>

        {posts &&
          posts.map((post) => (
            <PostCard post={post} img={post.img} />
          ))}
      </div>

    </div >
  )
}

export default Home