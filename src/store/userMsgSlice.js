import { createSlice } from '@reduxjs/toolkit';

export const userMsgSlice = createSlice({
  name: 'counter',
  initialState: {
    msg: { txt: '💪 Another test completed! 💪', msgClass: 'party party-1' },
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
