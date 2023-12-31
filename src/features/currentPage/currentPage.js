import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice = createSlice({
    name: "currentPage",
    initialState: 1,
    reducers: {
        setCurrentPage: (state, action) => {
            return action.payload;
        },
    },
});

export const { setCurrentPage } = currentPageSlice.actions;
export const selectPage = (state) => state;

export default currentPageSlice.reducer;
