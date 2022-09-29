import {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null 
    },
    reducers: {
        SET_USER: (state, action) => {
        state.user = action.payload
        }
}
})

export const {SET_USER} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
