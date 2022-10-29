import React from "react";

const artworks = [
  {
    id: "1",
    "path-image": "./images/obras/anni-roenkae.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "2",
    "path-image": "./images/obras/chaly-al-vito.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "3",
    "path-image": "./images/obras/daniel-schrader.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "4",
    "path-image": "./images/obras/merlin-lightpainting1.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "5",
    "path-image": "./images/obras/merlin-lightpainting2.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "6",
    "path-image": "./images/obras/merlin-lightpainting3.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "7",
    "path-image": "./images/obras/merlin-lightpainting4.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "8",
    "path-image": "./images/obras/merlin-lightpainting5.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "9",
    "path-image": "./images/obras/merlin-lightpainting6.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "10",
    "path-image": "./images/obras/arcoiris.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "11",
    "path-image": "./images/obras/break.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "12",
    "path-image": "./images/obras/broken.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "13",
    "path-image": "./images/obras/buildings.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "14",
    "path-image": "./images/obras/circles.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "15",
    "path-image": "./images/obras/cosmos.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "16",
    "path-image": "./images/obras/darya-sannikov.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "17",
    "path-image": "./images/obras/ekaterina.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "18",
    "path-image": "./images/obras/eric-smart.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "19",
    "path-image": "./images/obras/flower.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "20",
    "path-image": "./images/obras/imoression.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "21",
    "path-image": "./images/obras/jon-bagnato.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "22",
    "path-image": "./images/obras/lost.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "23",
    "path-image": "./images/obras/merlin-lightpainting9.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "24",
    "path-image": "./images/obras/nguyen-van.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "25",
    "path-image": "./images/obras/ocean.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "26",
    "path-image": "./images/obras/olga-kalinina.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "27",
    "path-image": "./images/obras/primavera.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "28",
    "path-image": "./images/obras/purple-flower.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "29",
    "path-image": "./images/obras/rose-flower.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  },
  {
    id: "30",
    "path-image": "./images/obras/sensoryarthouse.jpg",
    title: "Ondas",
    author: "Anni Roenkae",
    techniques: ["Puntillisto", "Óleo"],
    dimensions: "70x70cm",
    price: "400USD",
  }
];

const ClientHome = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])

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
