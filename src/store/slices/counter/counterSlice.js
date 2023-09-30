import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incremetByTwo: (state, action) => {
            state.counter += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incremetByTwo } = counterSlice.actions;