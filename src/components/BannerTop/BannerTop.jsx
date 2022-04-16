import './style.css';

function BannerTop({ banner }) {

    return (
        <div className='card_slide'>
            <img src={`https://www.themoviedb.org/t/p/original/${banner.backdrop_path}`} className='image_poster' />

            <div className='effect_glass'>
                <div className='card_info'>
                    <h2> {banner.title != null ? banner.title : banner.name} </h2>
                </div>
            </div>

            <img src={`https://www.themoviedb.org/t/p/original/${banner.backdrop_path}`} className='image_background' />

        </div>
    )
}

export default BannerTop;
