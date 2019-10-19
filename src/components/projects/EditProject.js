import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { editProject } from "./../../store/actions/projectActions";

export class EditProject extends Component {
  state = {
    title: this.props.project ? this.props.project.title : "",
    content: this.props.project ? this.props.project.content : "",
    id: this.props.id ? this.props.id : ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.editProject(this.state);
    this.props.history.replace({ pathname: "/" });
  };

  render() {
    const { project } = this.props;
    if (project) {
      return (
        <div>
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Edit Project</h5>
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  id="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </div>
              <div className="input-field">
                <label htmlFor="content">Project Content</label>
                <br />
                <textarea
                  id="content"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.content}
                />
              </div>
              <div className="input-field">
                <button className="btn green lighten-1 z-depth-0">Edit</button>
              </div>
            </form>
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
    editProject: project => dispatch(editProject(project))
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
)(EditProject);
