import React from "react";

const App = () => {
  return (
    <div className="container">
      <h1>TESTANDO INTEGRACAO AUTOMATICA</h1>
      <p>Diga aí, mundo!</p>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Coloque seu de e-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartilharemos seu e-mail com mais ninguém.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Mantenha Logado
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default App;
