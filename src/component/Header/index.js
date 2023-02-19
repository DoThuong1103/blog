import React from "react";
import { Typography } from "@mui/material";
import { HeaderBlog } from "./styles";
export default function Header() {
  // const classes = useStyles();
  return (
    <Typography component="div" align="center">
      <HeaderBlog>Blog</HeaderBlog>
    </Typography>
  );
}
