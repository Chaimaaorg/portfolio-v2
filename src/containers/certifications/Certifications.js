import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import Button from "../../components/button/Button";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    const hasCertifications = certifications.certifications && certifications.certifications.length > 0;
    
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Achievements And Certifications{" "}
              <span role="img" aria-label="trophy">🏆</span>
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {hasCertifications && certifications.certifications.map((cert, i) => {
            return <CertificationCard
              key={i}
              cardInfo={{
                title: cert.title,
                description: cert.subtitle,
                image: cert.image,
                imageAlt: cert.imageAlt,
                footer: cert.footerLink
              }}
            />
          })}
        </div>
        {hasCertifications && (
          <div className="certs-button-div">
            <Button
              text="See More Certifications"
              className="project-button"
              href="https://drive.google.com/file/d/1FjHNEq3dwXor-HBGov0wxTaO2LgCiQmF/view?usp=sharing" 
              newTab={true}
              theme={theme}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Certifications;