import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button, Modal } from "react-bootstrap";
const dataArtworks = [
  {
    _id: "6355cf38469d5456240f6dc8",
    fechaVenta: "02/05/2022",
    nombre: "Mujeres de avignon",
    autor: "Picasso",
    categoria: "Escultura",
    vendedor: "Lina Desalvador",
    precio: "$103,600",
    pathImagen: "",
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
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
    { dataField: "_id", text: "Id", footer: "" },
    { dataField: "nombre", text: "Obra", footer: "" },
    { dataField: "autor", text: "Autor", footer: "" },
    { dataField: "categoria", text: "Category", footer: "" },
    { dataField: "vendedor", text: "Vendedor", footer: "Total" },
    { dataField: "precio", text: "Precio", footer: "$5.999.452" },
  ];

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };
  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Detalle de la venta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-img-modal">
            <img src={"./images/obras/anni-roenkae.jpg"} alt="img" />
          </div>
          <div className="card-description-modal">
            <div className="row-info-modal">
              <p className="label-info-modal">Identificador:</p>
              <p> {modalInfo._id}</p>
            </div>
            <div className="row-info-modal">
              <p className="label-info-modal">Fecha de venta:</p>
              <p> {modalInfo.fechaVenta} </p>
            </div>
            <div className="row-info-modal">
              <p className="label-info-modal">Nombre de la obra:</p>
              <p> {modalInfo.nombre}</p>
            </div>
            <div className="row-info-modal">
              <p className="label-info-modal">Autor:</p>
              <p> {modalInfo.autor}</p>
            </div>
            <div className="row-info-modal">
              <p className="label-info-modal">Categoria: </p>
              <p> {modalInfo.categoria}</p>
            </div>
            <div className="row-info-modal">
              <p className="label-info-modal">Precio: </p>
              <p> {modalInfo.precio}</p>
            </div>
            <div className="row-info-modal">
              <p className="label-info-modal">Vendedor:</p>
              <p> {modalInfo.vendedor}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <div className="sales-card-body">
        <div className="row g-2 mb-3">
          <h2 className="col-md">Obras vendidas</h2>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                id="inputStartDate"
              ></input>
              <label htmlFor="inputStartDate">Fecha de inicio</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input type="date" className="form-control" id="inputEndDate"></input>
              <label htmlFor="inputEndDate">Fecha fin</label>
            </div>
          </div>
        </div>

        <BootstrapTable
          keyField="id"
          data={dataArtworks}
          columns={columns}
          pagination={paginationFactory()}
          rowEvents={rowEvents}
        />
        {show ? <ModalContent /> : null}
      </div>
    </>
  );
};
export default SalesTable;
