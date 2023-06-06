/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import React from "react";

const BlogDetailsCultura = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/act/2.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">Cursos y Talleres</h4>
                      <p>
                        Talleres de arte o danzas folklóricas, cursos de
                        peluquería, violín, guitarra, canto, tango o pastelería;
                        son algunas de las actividades que podes realizar en el
                        Centro Cultural Mercedes Sosa.
                      </p>

                      <div className="butons mt-40 mb-40">
                        <a className="butn bord curve mt-30">Saber mas</a>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/act/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <Link href="/deportes">
                            <div
                              className="mb-10"
                              style={{ cursor: "pointer" }}
                            >
                              <img src="/img/act/1.jpg" alt="" />
                            </div>
                          </Link>
                        </div>
                      </div>

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

export default BlogDetailsCultura;
