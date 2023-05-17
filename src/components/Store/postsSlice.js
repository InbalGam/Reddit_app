import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchReddit, getComments } from '../Utilities/Reddit_API';


export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (term) => {
        const results = await searchReddit(term);
        return results;
    }
);


export const loadComments = createAsyncThunk(
    'posts/loadComments',
    async ({ permalink, id}) => {
        const results = await getComments(permalink);
        const resultObj = {results, id}
        return resultObj;
    }
);



export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        isCommentsLoading: false,
        hasCommentsError: false
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            const data = action.payload.data.children.map(el => {
                return {
                    author: el.data.author,
                    title: el.data.title,
                    url: el.data.url,
                    score: el.data.score,
                    numComments: el.data.num_comments,
                    viewCount: el.data.view_count,
                    ups: el.data.ups,
                    downs: el.data.downs,
                    selftext: el.data.selftext,
                    timeCreated: new Date(el.data.created * 1000),
                    thumbnail: el.data.thumbnail,
                    id: el.data.id,
                    permalink: el.data.permalink,
                    comments: []
                };
            });
            state.posts = data;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadComments.pending]: (state, action) => {
            state.isCommentsLoading = true;
            state.hasCommentsError = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            const obj = state.posts.filter(el => el.id === action.payload.id);
            const data = action.payload.results[1].data.children.map(el => {
                return {
                    author: el.data.author,
                    ups: el.data.ups,
                    downs: el.data.downs,
                    body: el.data.body,
                    timeCreated: new Date(el.data.created * 1000),
                };
            });
            obj[0].comments = data;
            state.isCommentsLoading = false;
            state.hasCommentsError = false;
        },
        [loadComments.rejected]: (state, action) => {
            state.isCommentsLoading = false;
            state.hasCommentsError = true;
        }
    }
});

export const selectPosts = state => state.posts.posts;
export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;