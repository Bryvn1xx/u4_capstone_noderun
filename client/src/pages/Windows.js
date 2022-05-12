import WindowsPostCard from '../components/WindowsPostCard'
const Windows = ({ windowsFeed, posts }) => {
  console.log('Wfeeds', windowsFeed)



  return (
    < div className='home-page' >
      <h2>Windows</h2>
      {/* <h2>{feed.name}</h2> */}

      <div className='postcard-card'>
        {/* <HomeComponent feed={feed} posts={posts} /> */}

        {windowsFeed &&
          windowsFeed.map((windowsPost) => (
            <WindowsPostCard windowsPost={windowsPost} />
          ))}
      </div>






    </div >
  )
}

export default Windows