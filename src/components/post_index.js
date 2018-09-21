import React, { Component } from "react";
import connect from "react-redux";
import { bindActioCreators } from "react-redux";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts;
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a post!
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActioCreators({ fetchPosts }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(PostsIndex);
