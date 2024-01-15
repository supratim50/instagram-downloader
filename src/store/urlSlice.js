import {createSlice} from "@reduxjs/toolkit";

const urlSlice = createSlice({
    name: 'url',
    initialState: {
        url: ""
    },
    reducers: {
        setUrl: (state, action) => {
            console.log(action.payload);
            state.url = action.payload
        },
        removeUrl: (state) => {
            state.url = ""
        }
    }
})

export const {setUrl, removeUrl} = urlSlice.actions
export default urlSlice.reducer;