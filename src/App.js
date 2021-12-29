import React, { useState } from "react";

const App = () => {
  const [invitados, setInvitados] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handlerSubmit = event => {
    event.preventDefault();
    if (firstName.length > 0 && lastName.length > 0) {
      setInvitados([
        {
          fName: firstName,
          lName: lastName,
        },
        ...invitados,
      ]);
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={e => handlerSubmit(e)}>
            <div className="form-group">
              <label htmlFor="first-name">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="first-name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="last-name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            <div className="action">
              <button type="submit" className="btn btn-primary">
                Agregar Invitado
              </button>
            </div>
          </form>

          <table className="table bordered-table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
              </tr>
            </thead>
            <tbody>
              {invitados.map(({ fName, lName }, idx) => (
                <tr key={String(idx)}>
                  <td>{fName}</td>
                  <td>{lName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
