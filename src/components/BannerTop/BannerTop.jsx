import React, { useState, useEffect } from "react";
import './style.css';

function BannerTop({ banner }) {
    
    const [info, setInfo] = useState({})

    useEffect(() => {
        setInfo(banner) 
    }, [banner])

    useEffect(() => {
        viewBanner()
        console.log(info);
    }, [info])
    
    let version = ['w533_and_h300_bestv2','w600_and_h900_bestv2','original']
    
    function viewBanner() {
        console.log(info.title);
        return (
            <div className='card_slide'>
                <img src={`https://www.themoviedb.org/t/p/${version[2]}/${info.backdrop_path}`} className='image_poster' />
    
                <div className='effect_glass'>
                    <div className='card_info'>
                        <h2> {info.title != null ? info.title : info.name} </h2>
                        <h3> {info.overview } </h3>
                        {/* <button className='btn_details'> Mais Detalhes </button> */}
                    </div>
                </div>
    
                <img src={`https://www.themoviedb.org/t/p/${version[0]}/${info.backdrop_path}`} className='image_background' />
    
            </div>
        )
    }

    return (
        viewBanner()
    )
}

export default BannerTop;
