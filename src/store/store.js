import { configureStore } from '@reduxjs/toolkit';
import englishReducer from './englishSlice';
import userMsgReducer from './userMsgSlice';

export default configureStore({
  reducer: {
    english: englishReducer,
    userMsg: userMsgReducer,
  },
});
