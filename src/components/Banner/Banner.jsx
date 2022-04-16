import React from 'react'
import './style.css';


export const Banner = ({ obj }) => (
  <>
    <div className='card_space'>
      <div className='card_poster'>
        <h2> {obj.title} </h2>
        {/* <img src={"https://www.themoviedb.org/t/p/original/" + obj.poster_path} className='img_poster'></img> */}
        <img src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + obj.poster_path} className='img_poster'></img>
      </div>
    </div>
  </>
)
