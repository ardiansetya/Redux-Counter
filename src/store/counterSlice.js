import { createSlice } from "@reduxjs/toolkit";

// State awal untuk counter
const initialState = {
    count: 0,
};

// Membuat slice untuk counter
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Action untuk menambah 1
        increment: (state) => {
            state.count += 1;
        },
        // Action untuk mengurangi 1
        decrement: (state) => {
            state.count -= 1;
        },
        // Action untuk menambah dengan nilai tertentu
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    },
});

// Ekspor action yang dihasilkan
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Ekspor reducer untuk digunakan di store
export default counterSlice.reducer;
