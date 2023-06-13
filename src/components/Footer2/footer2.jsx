import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div>
        <h3 className="mb-50 text-center">Números útiles</h3>
        <ul
          className="row mb-50 text-center"
          style={{ justifyContent: "space-evenly", marginRight: 0 }}
        >
          <li className="mb-20">
            <h5>Atención al vecino</h5>
            <p>(3547) 628325</p>
          </li>
          <br />
          <li className="mb-20">
            <h5>Policía</h5>
            <p>(3547) 428177</p>
          </li>
          <br />
          <li className="mb-20">
            <h5>Defensa civil</h5>
            <p>(3547) 507415</p>
          </li>
          <br />
          <li className="mb-20">
            <h5>Comuna</h5>
            <p>(3547) 428177</p>
          </li>
        </ul>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>
                  © 2023 Imagine Big. Página oficial de la municipalidad Villa
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
