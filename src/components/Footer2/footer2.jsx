import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <img src="/img/logo-gr.png" alt="" />
              </a>
              <p>
                Sed ut perspiciatis undmnis iste natus error sit voluptatem
                accusantium dolore udantiuy totam rem aperiam.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <ul>
                <li>
                  <h6>Atención al vecino</h6>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>

                  <a>(3547) 628325</a>
                </li>
                <li>
                  <h6>Policia</h6>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>

                  <a>(3547) 428177</a>
                </li>
                <li>
                  <h6>Defensa civil</h6>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>

                  <a>(3547) 507415</a>
                </li>
                <li>
                  <h6>Comuna</h6>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>

                  <a>(3547) 428177</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Contacto</h5>

              <div className="social mt-30">
                <a
                  href="https://www.facebook.com/comunavilladelprado"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/villadelpradotw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@comunavilladelprado?_t=8ZDhTxglmFS&_r=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://www.instagram.com/comunavilladelprado/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
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
