import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Header from "../component/Header";
import PostList from "../component/Postlist";
import useStyle from "./styles";
import { showModal } from "../redux/actions";
import CreatePostModal from "../component/CreatePostModal";
export default function HomePage() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <div>
      <Container maxWidth="lg">
        <Header maxWidth="lg" />
        <PostList className={classes.top} />
        <CreatePostModal />
        <Fab color="primary" className={classes.fab} onClick={openCreatePostModal}>
          <AddIcon></AddIcon>
        </Fab>
      </Container>
    </div>
  );
}
