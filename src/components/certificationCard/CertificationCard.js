import React from "react";
import "./CertificationCard.scss";
import Button from "../button/Button";
import {buttonTheme} from "../../theme";

export default function CertificationCard({cardInfo,i}) {

  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">
          {cardInfo.title}
        </h5>
        <p className="card-subtitle">
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <Button
              key={i}
              text={v.name}
              className="certificate-tag"
              href={v.url}
              newTab={true}
              theme={buttonTheme}
            />
          );
        })}
      </div>
    </div>
  );
}
