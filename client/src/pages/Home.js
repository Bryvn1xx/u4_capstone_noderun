import HomeComponent from "../components/HomeComponent"

// import HomeComponent from '../components/HomeComponent'
import PostCard from '../components/PostCard'
const Home = ({ feed, posts }) => {
  console.log('feed', feed)
  console.log('posts', posts)



  return (
    <div className='home-page'>
      <h2>HomePage</h2>
      {/* <h2>{feed.name}</h2> */}

      <div className='postcard-card'>
        {/* <HomeComponent feed={feed} posts={posts} /> */}

        {posts &&
          posts.map((post) => (
            <PostCard post={post} />
          ))}
      </div>






    </div >
  )
}

export default Home