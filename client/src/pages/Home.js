import HomeComponent from "../components/HomeComponent"

// import HomeComponent from '../components/HomeComponent'
import PostCard from '../components/PostCard'
const Home = ({ feed, posts }) => {
  console.log('feed', feed)
  console.log('posts', posts)



  return (
    <div className='home-page'>
      <h2 className='title-page'>HomePage</h2>
      {/* <h2>{feed.name}</h2> */}
      <div className='home-block'>
        <img className='home-img' src='/noderun-logo.png'></img>
      </div>
      <div className='postcard-card'>
        {/* <HomeComponent feed={feed} posts={posts} /> */}

        {posts &&
          posts.map((post) => (
            <PostCard post={post} img={post.img} />
          ))}
      </div>






    </div >
  )
}

export default Home