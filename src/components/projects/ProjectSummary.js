import React from "react";
import moment from "moment";

export default function ProjectSummary(props) {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-sumary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{props.project.title}</span>
          <p>
            {" "}
            Posted by {props.project.authorFirstName}{" "}
            {props.project.authorLastName}
          </p>
          <p className="grey-text">
            {props.project.createdAt
              ? moment(props.project.createdAt.toDate()).calendar()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
