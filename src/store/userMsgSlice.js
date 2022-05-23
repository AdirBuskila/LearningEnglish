import { createSlice } from '@reduxjs/toolkit';

export const userMsgSlice = createSlice({
  name: 'counter',
  initialState: {
    msg: { txt: '🤩 You are correct ! 🤩', msgClass: 'success' },
  },
  reducers: {
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    clearMsg: (state) => {
      state.msg = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMsg, clearMsg } = userMsgSlice.actions;

export default userMsgSlice.reducer;
