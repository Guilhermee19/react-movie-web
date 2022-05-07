import React, { memo, useState, useEffect } from 'react'
import './style.css'
import CircularProgress from '../../components/CircularProgress'

const BannerTop = memo(({ banner }) => {

    const [info, setInfo] = useState({})

    let version = ['w533_and_h300_bestv2','w600_and_h900_bestv2','original']
    
    function viewBanner(){
        setInfo(banner)
        console.log(info.title);
    }

    useEffect(() => {
        viewBanner()
    }, [banner])

    if(banner?.id != info?.id){
        return(
            <div className='card_slide'>
                <CircularProgress />
            </div>
        )
    }
    else{
        return(
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
})

export default memo(props => {
    return <BannerTop {...props}  />
})