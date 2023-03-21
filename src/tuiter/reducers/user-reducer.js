import { createSlice } from "@reduxjs/toolkit";
import initialState from "./data/user.json"

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
});

export default userSlice.reducer;