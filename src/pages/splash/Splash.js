import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Lottie from "lottie-react";
import {greeting,splashScreen} from "../../portfolio";

import "./Splash.css";

function InlineLoaderLogo() {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <div className="splash-container">
          <div className="splash-animation-container">
            <Lottie animationData={splashScreen.animation} loop={true} />
          </div>
          <div className="splash-title-container">
            <span className="grey-color">&lt;</span>
            <span className="splash-title">{greeting.logo_name}</span>
            <span className="grey-color">/&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.id = null;
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2000);
  }

  componentWillUnmount() {
    if (this.id) {
      clearTimeout(this.id);
    }
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <InlineLoaderLogo />
    );
  }
}

export default Splash;
