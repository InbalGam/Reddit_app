import { createSlice } from '@reduxjs/toolkit';
import { searchReddit } from '../Utilities/Reddit_API';



export const loadPosts = (term) => {
    return async (dispatch) => {
        const results = await searchReddit(term);
        dispatch(fetchPosts(results));
    }
};



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
        },
        fetchPosts: (state, action) => {
            const data = action.payload.data.children.map(el => {
                return {
                    author: el.data.author_fullname,
                    title: el.data.title,
                    url: el.data.url,
                    score: el.data.score,
                    numComments: el.data.num_comments,
                    viewCount: el.data.view_count,
                    ups: el.data.ups,
                    downs: el.data.downs,
                    selftext: el.data.selftext,
                    timeCreated: el.data.created_utc,
                    comments: ['string1', 'string2'],
                    thumbnail: el.data.thumbnail
                };
            });
            state.length = 0;
            state.push(...data);
        }
    }
});

export const selectPosts = state => state.posts;
export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;