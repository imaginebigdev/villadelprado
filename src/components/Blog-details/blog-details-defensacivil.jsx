/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const BlogDetailsDefensa = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/single.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                        Defensa Civil Villa Del Prado
                      </h4>
                      <div className="spacial">
                        <p>
                          La Defensa Civil es una actividad que debe realizarse
                          en forma permanente buscando prevenir, limitar y
                          reducir los efectos de los fenómenos naturales,
                          materiales o humanos en la comunidad, orientando las
                          acciones a proteger la integridad física de la
                          población y su patrimonio.
                        </p>
                      </div>
                      <p>
                        La Defensa Civil actúa en todos los estadios de la
                        gestión integral de riesgo. Asimismo, la Defensa Civil
                        se concibe como un sistema de medidas defensivas de
                        carácter estatal, llevadas a cabo en tiempo de paz y
                        durante las situaciones excepcionales, con el propósito
                        de proteger a la población y a la economía nacional
                        contra los medios de destrucción del enemigo y en los
                        casos de desastres naturales u otros tipos de
                        catástrofes, así como de las consecuencias del deterioro
                        del medio ambiente. También comprende la realización de
                        los trabajos de salvamento y reparación urgente de
                        averías en los focos de destrucción o contaminación.
                      </p>

                      <p>
                        Teniendo en cuenta las características geográficas,
                        meteorológicas, demográficas y el desarrollo que posee
                        el territorio Municipal, sumado a los fenómenos
                        climatológicos que alcanzan a todas localidades en
                        iguales condiciones, hacen que nuestra localidad este
                        expuesto a los más diversos eventos adversos cuyo origen
                        puede ser natural, antrópico, o tecnológico. También es
                        propicio destacar que la ocurrencia de una emergencia o
                        desastre no se trata de un acontecimiento físico
                        aislado, se refiere al resultado de acciones humanas,
                        que no se pudieron proveer, prevenir y mitigar con
                        antelación para minimizar sus efectos. Nuestra localidad
                        sufre diversos riegos constantes que afectan al buen
                        funcionamiento de la población y por lo cual el
                        municipio toma diversas acciones o medidas para reducir
                        este tipo de fenómenos.
                      </p>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <h5 className="mt-50">
                        Legislación de Defensa Civil Ley Provincial Nº 8906
                      </h5>
                      <br />
                      <h6>CAPÍTULO I {"-"} SISTEMA DE DEFENSA CIVIL</h6>
                      <p>
                        Artículo 1º.- DEFENSA CIVIL. El Sistema de Defensa Civil
                        comprende el conjunto de previsiones y medidas de
                        carácter general tendientes a prevenir, evitar, reducir
                        y reparar los efectos de los eventos adversos
                        resultantes de la acción de agentes naturales o
                        antrópicos susceptibles de ocasionar un grave daño a la
                        población, o a los bienes públicos, privados y al medio
                        ambiente y, una vez acaecidos, aquéllas que contribuyen
                        a restablecer la normalidad en la zona afectada.
                      </p>
                      <br />
                      <h6>
                        CAPÍTULO VI {"-"} DE LA DEFENSA CIVIL MUNICIPAL Y
                        COMUNAL
                      </h6>
                      <p>
                        Artículo 15.- Los órganos ejecutivos de las
                        Municipalidades y Comunas deberán, en los ámbitos
                        sometidos a su competencia, implementar las acciones
                        previstas en el Artículo 1º de la presente Ley. Artículo
                        16.- JUNTAS LOCALES DE DEFENSA CIVIL. Los Municipios y
                        Comunas establecen la organización, responsabilidad y
                        facultades de las Juntas de Defensa Civil de cada
                        Localidad.
                      </p>
                      <p>
                        Los sistemas de Defensa Civiles locales su responsable
                        único Político y Legal es el Intendente o Presidente
                        Comunal, para prevenir, mitigar, alertar, coordinar,
                        rehabilitar y reconstruir, carecer de las Defensas
                        Civiles locales representa una omisión y/o
                        incumplimiento de los deberes de funcionario público.
                      </p>
                      <div className="share-info">
                        <div className="social">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsDefensa;
