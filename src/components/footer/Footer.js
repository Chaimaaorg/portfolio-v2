import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          {emoji("🚀 Built with passion by Chaimaâ Ourgani")}
        </p>
        <p className="footer-text">
          Based on the{" "}
          <a
            href="https://github.com/ashutosh1919/masterPortfolio"
          >
            masterPortfolio
          </a>{" "}
          Copyright © {new Date().getFullYear()}.
        </p>
      </div>
    </Fade>
  );
}
