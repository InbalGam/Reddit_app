import {createSlice} from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: [{
        headline: 'headline example 1',
        image: 'img',
        userName: 'Inbal',
        comments: ['string1', 'string2'],
        likes: 100,
        dislikes: 3,
        timePosted: '12 hrs ago'
    },
    {
        headline: 'headline example 2',
        image: 'img',
        userName: 'Nir',
        comments: ['string1', 'string2', 'string3', 'string4'],
        likes: 115,
        dislikes: 3,
        timePosted: '10 hrs ago'
    }],
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

export const selectPosts = state => state.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;