import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

import { Grid } from "@material-ui/core";
import Post from "./Post";
import { postsState$ } from "../../redux/selectors";
import useStyle from "./style";
export default function PostList() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  console.log("[Postlist-post]", posts);
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <Grid container spacing={2} alignItems="stretch" className={classes.top}>
      {posts.map((post) => (
        <Grid item xs={12} sm={4} key={post._id}>
          <Post post={post} posts={posts} />
        </Grid>
      ))}
    </Grid>
  );
}
