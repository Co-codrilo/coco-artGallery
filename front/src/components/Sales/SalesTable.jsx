import React from "react";

const data = [
  {
    _id: "6355cf38469d5456240f6dc8",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc7",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc6",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc5",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc4",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc3",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc2",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc1",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc0",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dc9",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dca",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dcb",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dcc",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dcd",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dce",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dcf",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dcg",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dch",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
  {
    _id: "6355cf38469d5456240f6dci",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
  },
];
const SalesTable = () => {
  return (
    <>
      <div className="sales-card-body">
        <h2>Obras vendidas</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Obra</th>
              <th>Autor</th>
              <th>Categoria</th>
              <th>Vendedor</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sale) => (
              <tr key={sale._id}>
                <td>{sale.fechaVenta}</td>
                <td>{sale.nombre}</td>
                <td>{sale.autor}</td>
                <td>{sale.categoria}</td>
                <td>{sale.vendedor}</td>
                <td>{sale.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SalesTable;
