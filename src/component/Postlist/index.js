import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

import { Grid } from "@mui/material";
import Post from "./Post";
import { postsState$ } from "../../redux/selectors";
import { PostListCss } from "./style";
export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  console.log("[Postlist-post]", posts);
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <PostListCss>
      <Grid container spacing={2} alignItems="stretch">
        {posts.map((post) => (
          <Grid item xs={12} sm={4} key={post._id}>
            <Post post={post} posts={posts} />
          </Grid>
        ))}
      </Grid>
    </PostListCss>
  );
}
