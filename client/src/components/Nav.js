import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/' >Home </Link>
        <Link to='/about'>About </Link>
        <Link to='/createpost'>CreatePost</Link>
        <Link to='/support'>Support</Link>
        <Link to='/windowsfeed'>For Windows</Link>
      </nav>
    </div>

  )
}

export default Nav