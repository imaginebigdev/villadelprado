import React from "react";
import Navbar from "../../components/Navbar/navbar";
import LightTheme from "../../layouts/Light";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import Intro5 from "../../components/Intro5/intro5";
import WorksStyle2 from "../../components/Works-style2/works-style2-autoridades";
import Footer2 from "../../components/Footer2/footer2";

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
      <Intro5 image="/img/arch/slid/1.jpg" />
      <MinimalArea />

      <WorksStyle2 grid={3} />
      <Footer2 />
    </LightTheme>
  );
};

export default About;
