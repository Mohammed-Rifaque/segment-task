import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  segment: [],
};

const segmentSlice = createSlice({
  name: "segment",
  initialState,
  reducers: {
    setSegment: (state, { payload }) => {      
      state.segment = payload;
    },
  },
});

export const { setSegment } = segmentSlice.actions;

export const segmentSelector = (state) => state.segment;

const segmentReducer = segmentSlice.reducer;
export default segmentReducer;
