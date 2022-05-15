import WindowsPostCard from '../components/WindowsPostCard'
import { FaWindows } from 'react-icons/fa'

const Windows = ({ windowsFeed, posts }) => {
  console.log('Wfeeds', windowsFeed)



  return (
    < div className='home-page' >
      <FaWindows className='windows-logo' />
      <h2> Windows</h2>


      <div className='postcard-card'>

        {windowsFeed &&
          windowsFeed.map((windowsPost) => (
            <WindowsPostCard windowsPost={windowsPost} />
          ))}
      </div>






    </div >
  )
}

export default Windows