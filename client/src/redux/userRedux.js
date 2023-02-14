import {createSlice} from "@reduxjs/toolkit";
const userRedux = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        errorLogin: false,
        errorRegister: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action)=> {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.errorLogin = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.errorLogin = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.errorLogin = false;
            state.errorRegister = false;
        },
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action)=> {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.errorRegister = false;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.errorRegister = true;
        },
    }
})

export const {loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure} = userRedux.actions
export default userRedux.reducer;