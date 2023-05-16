import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice';
import communityReducer from './communitySlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    community: communityReducer
  },
});
