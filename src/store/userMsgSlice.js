import { createSlice } from '@reduxjs/toolkit';
import { utilService } from '../services/util.service';

export const userMsgSlice = createSlice({
  name: 'counter',
  initialState: {
    msg: null,
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
