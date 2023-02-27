import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../Slices/questionsSlice";

export default configureStore({
    reducer: {
        questions: questionsReducer
        
    }
})
