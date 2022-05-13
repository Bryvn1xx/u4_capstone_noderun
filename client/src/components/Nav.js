import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbox'>

      <nav className='navbar'>

        <Link className='navlink' to='/' >Home </Link>
        <Link className='navlink' to='/about'>About </Link>
        <Link className='navlink' to='/createpost'>CreatePost</Link>
        <Link className='navlink' to='/support'>Support</Link>
        <Link className='navlink' to='/windowsfeed'>For Windows</Link>
      </nav>

    </div>

  )
}

export default Nav