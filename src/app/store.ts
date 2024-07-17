import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // movie: movieReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;