import React, { useCallback } from "react";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../../../redux/actions";
import useStyle from "./style";

export default function Post({ post, posts }) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const onLikeBtnClick = useCallback(() => {
    dispatch(updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 }));
  }, [dispatch, post]);
  const onDeleteBtnClick = useCallback(() => {
    dispatch(deletePost.deletePostRequest(post));
  }, [dispatch, post]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton onClick={onDeleteBtnClick}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardMedia image={post.attachment} title="Image" className={classes.media} />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>{" "}
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
