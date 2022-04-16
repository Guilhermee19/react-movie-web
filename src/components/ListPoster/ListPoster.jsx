import React from "react";
import { Link } from "react-router-dom";
import { Banner } from '../../components/Banner/Banner'
import './style.css';

function ListPoster({ SelectBanner, list_marvel }) {

  return (
    <>
      <div className="card_sombra"></div>
      <section className="list_marvel">
        {list_marvel.map((obj) => (
          // <Link to={`/marvel/${obj.id}`} key={obj.id} onClick={() => SelectBanner(obj)} className="card_banner">
          <div key={obj.id} onClick={() => SelectBanner(obj)} className="card_banner">
            <Banner obj={obj} />
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
