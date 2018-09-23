import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import PostsIndex from "./components/post_index";
import PostsNew from "./components/post_new";
import PostsShow from "./components/post_show";

const Greeting = () => {
  return <div>Hey there</div>;
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

{
  /* <Route path="/" component={App} /> */
}
