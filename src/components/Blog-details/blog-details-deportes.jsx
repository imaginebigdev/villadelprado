/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import React from "react";

const BlogDetailsDeportes = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/act/1.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">Niños Exploradores</h4>
                      <p>
                        Todos los sábados en el polideportivo de 8:00 a 12:00
                        hs. Los Esperamos!
                      </p>

                      <div className="spacial">
                        <p>GRATUITAS!</p>
                      </div>
                      <div className="butons mt-40 mb-40">
                        <a
                          className="butn bord curve mt-30"
                          href="https://api.whatsapp.com/send?phone=5493547628325"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Saber mas
                        </a>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Link href="/cultura">
                            <div
                              className="mb-10"
                              style={{ cursor: "pointer" }}
                            >
                              <img src="/img/act/2.jpg" alt="" />
                            </div>
                          </Link>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/act/1.jpg" alt="" />
                          </div>
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

export default BlogDetailsDeportes;
