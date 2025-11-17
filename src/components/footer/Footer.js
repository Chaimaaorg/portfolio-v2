import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div">
        <p className="footer-text">
          {emoji(`© ${currentYear} Chaimaâ Ourgani | All Rights Reserved`)}
        </p>
      </footer>
    </Fade>
  );
}
