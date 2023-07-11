import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
// For a simple example, we'll create a counter reducer
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
