import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "../component/Header";
import PostList from "../component/Postlist";
import { showModal } from "../redux/actions";
import CreatePostModal from "../component/CreatePostModal";
import { IconAdd, Home } from "./styles";
export default function HomePage() {
  const dispatch = useDispatch();
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <Home>
      <Container maxWidth="lg">
        <Header maxWidth="lg" />
        <PostList />
        <CreatePostModal />
        <IconAdd>
          <Fab color="primary" component="div" onClick={openCreatePostModal}>
            <AddIcon></AddIcon>
          </Fab>
        </IconAdd>
      </Container>
    </Home>
  );
}
