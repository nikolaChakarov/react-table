import { createSlice } from "@reduxjs/toolkit";

const initUser = {
    value: localStorage.getItem('user_nc') ? JSON.parse(localStorage.getItem('user_nc')) : null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initUser,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = null
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;