import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions";

class PostsNew extends Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{title.touch ? title.error : ""}</div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a username";
  }

  return errors;
}

export default reduxForm(
  {
    form: "PostsNew",
    fields: ["title", "categories", "content"],
    validate
  },
  null,
  { createPost }
)(PostsNew);
