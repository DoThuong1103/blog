import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    console.log("[createpost saga]", post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload);
    console.log("[updatepost saga]", updatedPost);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* deletePostSaga(action) {
  try {
    const deletedPost = yield call(api.deletePost, action.payload);
    console.log("[deletepost saga]", deletedPost.data);
    yield put(actions.deletePost.deletePostSuccess(deletedPost.data));

    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.deletePost.deletePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

// generator function ES6

export default mySaga;
