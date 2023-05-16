import {createSlice} from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
// payload = {
//     headline: 'string',
//     image: img,
//     userName: name,
//     comments: ['string1', 'string2'],
//     likes: 100,
//     dislikes: 3,
//     timePosted: '12 hrs ago'
// };
            state.push(action.payload);
        }
    }
});

export const selectPosts = state => state.posts.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;