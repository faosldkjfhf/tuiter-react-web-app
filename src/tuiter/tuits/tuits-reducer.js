import { createSlice } from "@reduxjs/toolkit";
import { todoDoneToggle } from "../../labs/a7/redux-examples/reducers/todos-reducer";
import tuits from './tuits.json';
import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk }
    from "../../services/tuits-thunks";

const currentUser = {
    "userName": "Kevin Liu",
    "handle": "faosldkjfhf",
    "image": "/catjam.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }



    }
    // reducers: {
    //     changeLikedValue(state, action) {
    //         const tuit = state.find((tuit) => tuit._id === action.payload._id)
    //         tuit.liked = !tuit.liked
    //         tuit.likes = tuit.liked ? tuit.likes + 1 : tuit.likes - 1
    //     },
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(tuit =>
    //                 tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime(),
    //         })
    //     }
    // }
});

export const { changeLikedValue, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;