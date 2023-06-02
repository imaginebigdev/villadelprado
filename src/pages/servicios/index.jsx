import React from "react";
import Navbar from "../../components/Navbar/navbar";
import CallToAction from "../../components/Call-to-action/call-to-action";
import LightTheme from "../../layouts/Light";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import Intro5 from "../../components/Intro5/intro5";
import WorksStyle2 from "../../components/Works-style2/works-style2-autoridades";
import Footer2 from "../../components/Footer2/footer2";
import Services2 from "../../components/Services2/services2";
import Services3 from "../../components/Services3/services3";
import Services4 from "../../components/Services4/services4";
import Services5 from "../../components/Services5/services5";
import Services6 from "../../components/Services6/services6";
import Services7 from "../../components/Services7/services7";
import Services8 from "../../components/Services8/services8";

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
      <Intro5 />
      <Services8 />
      <CallToAction />
      <Footer2 />
    </LightTheme>
  );
};

export default About;
