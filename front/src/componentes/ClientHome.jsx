import React from "react";
import {artworks} from './artworks'

const ClientHome = (props) => {
  return (
    <div className="home-container">
      <h1>Galería</h1>
      <section className="card-container">
        {artworks.map((artwork) => {
          return(
          <div className="card" key={artwork.id}>
            <div className="card-img">
              <img src={artwork["path-image"]} alt="img" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{artwork.title}</h5>
              <div className="card-body-container">
                <div>
                  <p className="card-body-author">Por {artwork.author}</p>
                  <p className="card-body-artwork-data">{artwork.techniques.join(", ")}</p>
                  <p className="card-body-artwork-data">{artwork.dimensions}</p>
                  <p className="card-body-artwork-data">{artwork.price}</p>
                </div>
                <button>+</button>
              </div>
            </div>
          </div>
          )
        })}
        </section>
    </div>
  );
};

export default ClientHome;
