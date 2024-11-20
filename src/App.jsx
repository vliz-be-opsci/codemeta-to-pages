import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CodemetaData from "./data/codemeta_array.json";
import { CodemetaTable } from "./components/codemetatable";

// on page load console log the data
console.log(CodemetaData);
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{ marginLeft: "10px" }}>
          Codemeta repository
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div className="container mt-5 flex-grow-1">
        <div className="row">
          <div className="col">
            <h2>Codemeta Table</h2>
            {
              /* Add the CodemetaTable component here */
              <CodemetaTable codemeta={CodemetaData} />
            }
          </div>
        </div>
      </div>

      <footer className="bg-light text-center text-lg-start mt-auto">
        <div className="text-center p-3">
          © 2024 codemeta:
          <a className="text-dark" href="https://open-science.vliz.be/">
            {" "}
            vliz-be-opsci.be
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
