import {configureStore, createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        username: null,
        id: null,
        email: null
    },
    reducers: {
        login(state, action) {
            const { nemail, nusername, nid } = action.payload;
            state.isLoggedIn = true;
            state.username = nusername;
            state.id =  nid;
            state.email = nemail;
            localStorage.setItem('authState', JSON.stringify(state));
        },
        logout(state){
            state.isLoggedIn = false;
            state.username = null;
            state.id =  null;
            state.email = null;
            localStorage.removeItem('authState');
        }
    }
});

export const authActions = authSlice.actions;

const persistedAuthState = localStorage.getItem('authState');
const initialAuthState = persistedAuthState ? JSON.parse(persistedAuthState) : authSlice.initialState;
export const store = configureStore({
    reducer: authSlice.reducer,
    preloadedState: {
        auth: initialAuthState
    }
})