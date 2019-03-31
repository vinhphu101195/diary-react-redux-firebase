import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import { deleteProject } from "./../../store/actions/projectActions";

var onDelete = (id, props) => {
  alert("are you sure to delete this!");
  props.editProject(id);
  props.history.push("/");
  window.location.reload();
};

function ProjectDetails(props) {
  const { project, auth, id } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {project.title}</span>
            <p>{project.content}</p>
            <Link to={"/edit/" + id}>
              <button className="waves-effect yellow btn-small" href="#">
                Edit
              </button>
            </Link>
            <button
              className="waves-effect red btn-small"
              onClick={() => onDelete(id, props)}
            >
              Delete
            </button>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>
              {" "}
              {project.createdAt
                ? moment(project.createdAt.toDate()).calendar()
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    id: id,
    project: project,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProject: id => dispatch(deleteProject(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
