import React, { useEffect } from "react";
import './style.css';

function BannerTop({ banner }) {
    
    useEffect(() => {
        viewBanner()
        console.log(banner);
      }, [banner])

      let version = ['w533_and_h300_bestv2','w600_and_h900_bestv2','original']

      function viewBanner() {
          return (
              <div className='card_slide'>
                  <img src={`https://www.themoviedb.org/t/p/${version[2]}/${banner.backdrop_path}`} className='image_poster' />
      
                  <div className='effect_glass'>
                      <div className='card_info'>
                          <h2> {banner.title != null ? banner.title : banner.name} </h2>
                          <h3> {banner.overview } </h3>
                          {/* <button className='btn_details'> Mais Detalhes </button> */}
                      </div>
                  </div>
      
                  <img src={`https://www.themoviedb.org/t/p/${version[0]}/${banner.backdrop_path}`} className='image_background' />
      
              </div>
          )
      }

      return (
        viewBanner()
    )
      
}

export default BannerTop;
