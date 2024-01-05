import { combineReducers , configureStore } from "@reduxjs/toolkit";

import segmentReducer from "./slicers/segmentSlice";


const rootReducer = combineReducers({
    segment: segmentReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;