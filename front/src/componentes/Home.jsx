import React from "react";
import { artworks } from "./artworks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container-galery-admin">
        <h1>Galería</h1>
        <button>Agregar obra</button>
      </div>
      <section className="card-container">
        {artworks.map((artwork) => {
          return (
            <div className="card-admin">
              <div className="card-img">
                <img src={artwork["path-image"]} alt="img" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{artwork.title}</h5>

                <div className="card-body-container-admin">
                <div>
                  <p className="card-body-author">Por {artwork.author}</p>
                  <p className="card-body-artwork-data">{artwork.techniques.join(", ")}</p>
                  <p className="card-body-artwork-data">{artwork.dimensions}</p>
                  <p className="card-body-artwork-data">{artwork.price}</p>
                </div>
                <div className="card-footer-admin">
                  <Link to={"/"}>
                    <img src="../images/update.png" alt="update" />
                  </Link>
                
                  <Link to={"/"}>
                    <img src="../images/delete.png" alt="delete" />
                  </Link>
                </div>
              </div>

              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
