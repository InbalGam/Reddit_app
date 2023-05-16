import {createSlice} from '@reduxjs/redux-toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {},
    reducers: {
        addPost: (state, action) => {}
    }
});

export const selectPosts = state => state.posts.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;