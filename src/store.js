import { configureStore } from "@reduxjs/toolkit";
import formslice from "./redux/reducers";
import todoSlice from "./redux/todoslice";

const store = configureStore({
    reducer: {
        forms: formslice,
        todos: todoSlice
    }
})

export default store;