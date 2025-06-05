// Experience.js - Updated with better mobile responsiveness
import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js"; 
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    
    // Debug: Log the experience data
    console.log("Experience data:", experience);
    console.log("Experiences array:", experience.experiences);
    
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.greetingSubtitleColor }}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
              
        <div className="experience-cards-container">
          {experience.experiences && experience.experiences.length > 0 ? (
            experience.experiences.map((exp, index) => {
              console.log(`Rendering experience ${index}:`, exp);
              return (
                <ExperienceCard 
                  key={index}
                  index={index} 
                  totalCards={experience.experiences.length} 
                  experience={exp} 
                  theme={theme} 
                />
              );
            })
          ) : (
            <div className="no-experiences-message" style={{ color: 'red' }}>
              No experiences found or experiences array is empty!
            </div>
          )}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;