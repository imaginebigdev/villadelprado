import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="text-center">
        <h3 className="mb-50">Numeros utiles</h3>
        <ul className="row mb-50" style={{ justifyContent: "space-evenly" }}>
          <li className="mb-20">
            <h4>Atención al vecino</h4>
            <h5>(3547) 628325</h5>
          </li>
          <br />
          <li className="mb-20">
            <h4>Policia</h4>
            <h5>(3547) 428177</h5>
          </li>
          <br />
          <li className="mb-20">
            <h4>Defensa civil</h4>
            <h5>(3547) 507415</h5>
          </li>
          <br />
          <li className="mb-20">
            <h4>Comuna</h4>
            <h5>(3547) 428177</h5>
          </li>
        </ul>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>
                  © 2023 Imagine Big. Pagina oficial de la municipalidad Villa
                  Del Prado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
