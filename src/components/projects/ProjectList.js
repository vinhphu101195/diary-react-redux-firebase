import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log(projects);

  return (
    <div>
      {projects &&
        projects.map((project, index) => {
          return (
            <Link to={"/project/" + project.id} key={index}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
