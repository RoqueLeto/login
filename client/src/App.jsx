import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h3>Faça seu Login</h3>
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
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
              Enviar
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};
export default App;
