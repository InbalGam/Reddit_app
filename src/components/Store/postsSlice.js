import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchReddit, loadMore } from '../Utilities/Reddit_API';


export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async ({term, type}) => {
        const results = await searchReddit(term, type);
        return {results, term, type};
    }
);


export const loadMorePosts = createAsyncThunk(
    'posts/loadMorePosts',
    async (arg, { getState }) => {
        const status = getState();
        const results = await loadMore(status.posts.subReddit, status.posts.posts.slice(-1)[0].name, status.posts.type);
        return {results};
    }
);


const fetchData = (payload) => {
    const data = payload.results.data.children.map(el => {
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
            name : el.data.name
        };
    });
    return data;
};


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        isMoreLoading: false,
        hasMoreError: false,
        subReddit: '',
        type: ''
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            const data = fetchData(action.payload);
            state.posts = data;
            state.subReddit = action.payload.term;
            state.type = action.payload.type;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },




        [loadMorePosts.pending]: (state, action) => {
            state.isMoreLoading = true;
            state.hasMoreError = false;
        },
        [loadMorePosts.fulfilled]: (state, action) => {
            const data = fetchData(action.payload);
            state.posts.push(...data);
            state.isMoreLoading = false;
            state.hasMoreError = false;
        },
        [loadMorePosts.rejected]: (state, action) => {
            state.isMoreLoading = false;
            state.hasMoreError = true;
        }
    }
});

export const selectPosts = state => state.posts.posts;
export const selectSubReddit = state => state.posts.subReddit;
export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;