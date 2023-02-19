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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../../../redux/actions";

import { MediaStyle } from "./style";

export default function Post({ post }) {
  const dispatch = useDispatch();
  const onLikeBtnClick = useCallback(() => {
    dispatch(updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 }));
  }, [dispatch, post]);
  const onDeleteBtnClick = useCallback(() => {
    dispatch(deletePost.deletePostRequest(post));
  }, [dispatch, post]);
  const styles = {
    card: {
      height: "150px",
    },
  };
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

      <CardMedia image={post.attachment} title="Image" style={styles.card} />

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
