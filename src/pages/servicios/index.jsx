import React from "react";
import Navbar from "../../components/Navbar/navbar";
import CallToAction from "../../components/Call-to-action/call-to-action";
import LightTheme from "../../layouts/Light";
import Intro5 from "../../components/Intro5/intro5";
import Footer2 from "../../components/Footer2/footer2";

import Services7 from "../../components/Services7/services7";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro5
        image="/img/arch/slid/0.jpg"
        title="#MASCERCATUYO"
        subtitle="En esta sección vas a poder conoce, todo lo servicio que ofrece la comuna"
      />
      <Services7 />
      <CallToAction />
      <Footer2 />
    </LightTheme>
  );
};

export default About;
