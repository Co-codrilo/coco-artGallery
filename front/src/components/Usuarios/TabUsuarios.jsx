import React from "react";
import { Link } from "react-router-dom";

const users = [
  {
    id: "1",
    documento: "7.456.452",
    nombres: "Juana",
    apellidos: "Barrera Quito",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "2",
    documento: "7.456.452",
    nombres: "Miguel",
    apellidos: "Angel Ramos",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "3",
    documento: "7.456.452",
    nombres: "Daniel",
    apellidos: "Fernandez Rosas",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "4",
    documento: "7.456.452",
    nombres: "Felipe",
    apellidos: "Garnica Barrera",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "5",
    documento: "7.456.452",
    nombres: "Manuel",
    apellidos: "Monroy Pulido",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "6",
    documento: "7.456.452",
    nombres: "Cristian",
    apellidos: "Ramirez Lopez",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "1",
    documento: "7.456.452",
    nombres: "Juana",
    apellidos: "Barrera Quito",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "2",
    documento: "7.456.452",
    nombres: "Miguel",
    apellidos: "Angel Ramos",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "3",
    documento: "7.456.452",
    nombres: "Daniel",
    apellidos: "Fernandez Rosas",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "4",
    documento: "7.456.452",
    nombres: "Felipe",
    apellidos: "Garnica Barrera",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "5",
    documento: "7.456.452",
    nombres: "Manuel",
    apellidos: "Monroy Pulido",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
  {
    id: "6",
    documento: "7.456.452",
    nombres: "Cristian",
    apellidos: "Ramirez Lopez",
    email: "juanabq@gmail.com",
    direccion: "Cll.14 35-23",
  },
 
  
];
const TabUsuarios = () => {
  return (
    <div className="sales-card-body">
      <h2>Lista de usuarios</h2>

      <table className="table table-hover table table-bordered">
        <thead>
          <tr>
            <th>Documentos</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Dirección</th>
            <th colSpan={3}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="table" key={user.id}>
              <td>{user.documento}</td>
              <td>{user.nombres}</td>
              <td>{user.apellidos}</td>
              <td>{user.email}</td>
              <td>{user.direccion}</td>
              <td className="action-button-in-table">
                <Link to={"/UpdateUsuario"}>
                  <img src="../images/update.png" alt="update" />
                </Link>
              </td>
              <td className="action-button-in-table">
              <Link to={"/DeleteUsuario"}>
                <img src="../images/delete.png" alt="delete" />
                </Link>
              </td>
              <td className="action-button-in-table">
                <Link to={"/ListaPedidos"}>
                  <img src="../images/shopping.png" alt="shopping" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabUsuarios;
