import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './shopSlice';
import authReducer from './authSlice';

export default configureStore({
    reducer: {
        shop: shopReducer,
        user: authReducer,
    }
});