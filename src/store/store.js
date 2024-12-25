import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

// Konfigurasi Redux store
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, // Menggunakan counterSlice.reducer untuk mengelola state counter
    },
});
