import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    questions: [],
    status: null
}
export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
    let headers = { 'Content-Type': 'application/json' };
    return fetch('https://dataapis.herokuapp.com/questionnaire/', { headers, })
        .then(res => res.json())

})
export const questionSlice = createSlice({
    name: "questions",
    initialState,
    extraReducers: {
        [fetchQuestions.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchQuestions.fulfilled]: (state, action) => {
            console.log('inside payload');
            console.log(action.payload);
            state.questions = action.payload
            state.status = 'success'
        },
        [fetchQuestions.rejected]: (state, action) => {
            state.status = 'failed'
        }

    }
})
export default questionSlice.reducer;
