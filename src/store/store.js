import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import englishReducer from './englishSlice';
import userMsgReducer from './userMsgSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    english: englishReducer,
    userMsg: userMsgReducer,
  },
});
