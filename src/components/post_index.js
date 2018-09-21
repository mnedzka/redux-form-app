import React, { Component } from "react";
import connect from "react-redux";
import { bindActioCreators } from "react-redux";
import { fetchPosts } from "../actions";

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts;
  }

  render() {
    return <div>List of blog posts</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActioCreators({ fetchPosts }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(PostIndex);
