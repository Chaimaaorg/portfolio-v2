import React from "react";
import "./BigProjectCard.scss";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";

export default function BigProjectCard({ project, i }) {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  return (
    <div className="projects-container">
      <div className="project-card project-card-light">
        {project.image && (
          <div className="project-image">
            <img
              src={project.image}
              alt={project.projectName || "Project Image"}
              className="card-image"
            />
          </div>
        )}
        <div className="project-detail">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-subtitle">{project.projectDesc}</p>
    {project.languages && project.languages.length > 0 && (
      <ProjectLanguages
        className="repo-languages"
        logos={project.languages}
      />
    )}
          {project.footerLink && project.footerLink.length > 0 && (
            <div className="project-card-footer">
              {project.footerLink.map((link, idx) => (
                <span
                  key={idx}
                  className="project-tag"
                  onClick={() => openUrlInNewTab(link.url)}
                >
                  {link.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
