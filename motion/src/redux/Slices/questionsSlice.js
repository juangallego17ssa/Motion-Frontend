import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "questionsSlice",
    initialState:    
        {
            questionsArray: []
        },  
    reducers:
        {
            setQuestions: (state, action) => {state.questionsArray = action.payload}
        }
    }
)

export const {setQuestions} = questionSlice.actions

export default questionSlice.reducer