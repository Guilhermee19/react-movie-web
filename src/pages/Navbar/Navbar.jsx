import React, { useEffect } from 'react'
import '../../App.css';
import './style.css';
import { Chair, Dark, Movie, Tv } from '../../components/Icons/Icons'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <nav className='menu_lateral'>
        <ul className='menu_options'>
          <li id='chad'> <Link to={'#'}> <Chair /> </Link> </li>
          <li id='movie'> <Link to={'/movie'}> <Movie /> </Link>  </li>
          <li id='tv'> <Link to={'/tv'}> <Tv /> </Link> </li>
        </ul>
        <li className='card_mode'> <Dark /> </li>
        {/* <li> <Lite /> </li> */}
      </nav>
    </>
  );
}

export default Navbar;
