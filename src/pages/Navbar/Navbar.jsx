import React, { useEffect, useState } from 'react'
import '../../App.css';
import './style.css';
import { Chair, Dark, Movie, Tv } from '../../components/Icons/Icons'
import { Link } from 'react-router-dom';

function Navbar() {

  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.pathname)
  }, [url])

  const selectScreen = (text) => {
    setUrl(text)
  }

  return (
    <>
      <nav className='menu_lateral'>
        <ul className='menu_options'>
          <li className={url === '/' ? 'active' : ''}>
            <Link to={'/'} onClick={() => selectScreen('/')}>
              <Chair />
            </Link> </li>
          <li className={url === '/movie' ? 'active' : ''}>
            <Link to={'/movie'}  onClick={() => selectScreen('/movie')}>
              <Movie />
            </Link>  </li>
          <li className={url === '/tv' ? 'active' : ''}>
            <Link to={'/tv'}  onClick={() => selectScreen('/tv')}>
              <Tv />
            </Link> </li>
        </ul>
        <li className='card_mode'> <Dark /> </li>
        {/* <li> <Lite /> </li> */}
      </nav>
    </>
  );
}

export default Navbar;
