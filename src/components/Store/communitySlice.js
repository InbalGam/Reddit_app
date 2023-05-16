import {createSlice} from '@reduxjs/toolkit';

export const communitySlice = createSlice({
    name: 'community',
    initialState: '',
    reducers: {
        chooseCommunity: (state, action) => {
            // payload = 'Golf';
            state = action.payload;
        }
    }
});

export const selectCommunity = state => state.community.community;
export const { chooseCommunity } = communitySlice.actions;
export default communitySlice.reducer;