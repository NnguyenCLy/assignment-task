import { configureStore } from "@reduxjs/toolkit";
import currentPageSlice from "../features/currentPage/currentPage";

export default configureStore({
    reducer: currentPageSlice,
});
