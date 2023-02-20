import axios from "axios";

const URL = "https://note-app-post-list.onrender.com";

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);
export const deletePost = (payload) => axios.post(`${URL}/posts/delete`, payload);
