import React from "react";

const Services7 = ({ lightTheme }) => {
  return (
    <>
      <section className="serv-block section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="serv-img md-mb50">
                <img
                  src={
                    lightTheme
                      ? "/img/mobile-app/app-img/light/1.png"
                      : "/img/mobile-app/app-img/1.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 valign">
              <div className="content" style={{ width: "100%" }}>
                <h6 className="stit mb-30 text-center">
                  <span className="left"></span> TURNOS ONLINE
                </h6>
                <h2 className="mb-30 text-center">
                  Pedí tu Turno Online. Sin moverte de tu casa
                </h2>

                <div className="list-feat mt-40">
                  <ul>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Atención ciudadana
                    </li>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Licencias de conducir
                    </li>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Pagar impuestos
                    </li>
                    <li>
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Consultas{" "}
                    </li>
                  </ul>
                  <div className="butons mt-40 text-center">
                    <a href="#0" className="butn-gr rounded buton">
                      <span>Sacar turno</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serv-block section-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="serv-img md-mb50">
                <img
                  src={
                    lightTheme
                      ? "/img/mobile-app/app-img/light/2.png"
                      : "/img/mobile-app/app-img/2.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 valign">
              <div className="content" style={{ width: "100%" }}>
                <h6 className="stit mb-30 text-center">
                  <span className="left"></span> MÁS INFO MIS IMPUESTOS
                </h6>
                <h2 className="mb-30 text-center">Pagá tus impuestos</h2>

                <div className="list-feat mt-40">
                  <ul>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Conocé el estado de tus impuestos
                    </li>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Realizá tus pagos
                    </li>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Poné al día tus cuentas
                    </li>
                    <li>
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Consultá tus dudas
                    </li>
                  </ul>
                  <div className="butons mt-40 text-center">
                    <a href="#0" className="butn-gr rounded buton">
                      <span>Mas info</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serv-block section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="serv-img md-mb50">
                <img
                  src={
                    lightTheme
                      ? "/img/mobile-app/app-img/light/3.png"
                      : "/img/mobile-app/app-img/3.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 valign">
              <div className="content" style={{ width: "100%" }}>
                <h6 className="stit mb-30 text-center">
                  <span className="left"></span> RECREACIÓN Y DEPORTES
                </h6>
                <h2 className="mb-30 text-center">
                  Club social y Polideportivo
                </h2>

                <div className="list-feat mt-40">
                  <ul>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Actividades para todas las edades
                    </li>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Niños exploradores
                    </li>
                    <li className="mb-20">
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Curso de danzas folklóricas
                    </li>
                    <li>
                      <i className="icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                        </svg>
                      </i>{" "}
                      Y mucho más...
                    </li>
                  </ul>
                  <div className="butons mt-40 text-center">
                    <a href="#0" className="butn-gr rounded buton">
                      <span>Ver actividades</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services7;
