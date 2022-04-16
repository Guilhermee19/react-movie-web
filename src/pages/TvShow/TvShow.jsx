import React, { useState, useEffect } from "react";
import { TopTv } from "../../api/api";
import './style.css';
import BannerTop from "../../components/BannerTop/BannerTop";
import ListPoster from "../../components/ListPoster/ListPoster";

function TvShow() {

  const [list_top, setTop] = useState([])
  const [banner, setBanner] = useState({})
  const [loading, setLoading] = useState(false)

  let page = 1;
  let list = []

  useEffect(() => {
    getMovie(page)
  }, [])

  function getMovie(page) {
    TopTv(page)
      .then(data => {
        console.log(data)
        list = list.concat(data.results)

        if (data.total_pages !== page) {
          getMovie(page + 1)
        }
        else {
          let list_save = list.filter(el => (el.poster_path !== null && el.backdrop_path !== null))
          setTop(list_save)
          setBanner(list[0])

          setLoading(true)
        }
      })
      .catch(err => console.log(err))
  }


  const SelectBanner = (banner) => {
      setBanner(banner)
  }

  return (
    <>
      {loading && (
        <div className="screen_top">
          <BannerTop banner={banner} />
          <ListPoster SelectBanner={SelectBanner} banner={banner} list_marvel={list_top} />
        </div>
      )}

    </>
  );
}

export default TvShow;
