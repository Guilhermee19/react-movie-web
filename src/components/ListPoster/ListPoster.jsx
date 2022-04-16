import React from "react";
import { Banner } from '../../components/Banner/Banner'
import './style.css';

function ListPoster({ SelectBanner, banner, list_marvel }) {

  return (
    <>
      <div className="card_sombra"></div>
      <section className="list_marvel">
        {list_marvel.map((obj) => (
          // <Link to={`/marvel/${obj.id}`} key={obj.id} onClick={() => SelectBanner(obj)} className="card_banner">
          <div key={obj.id} onClick={() => SelectBanner(obj)} className="card_banner">
            <Banner obj={obj} banner={banner}/>
          </div>
        ))}
        
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
        <div className="card_banner card_empty"></div>
      </section>
    </>
  );
}

export default ListPoster;
