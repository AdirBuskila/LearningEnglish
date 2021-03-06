import { createSlice } from '@reduxjs/toolkit';
import { pathToStorage } from '../services/storage.service';
import { classRoom } from '../services/learn.service';

export const englishSlice = createSlice({
  name: 'learn-english',
  initialState: {
    data: null,
    category: null,
    testArr: null,
    student: null,
    allDone: null,
  },
  reducers: {
    setData: (state) => {
      state.data = classRoom;
    },
    testCompleted: (state, action) => {
      if (!state.student.completedTests.includes(action.payload)) {
        state.student.completedTests.push(action.payload);
        pathToStorage.saveToStorage('student', state.student);
      }
      // category
    },
    setCategory: (state, action) => {
      state.category = state.data.categories.filter(
        (catg) => catg.type === action.payload
      )[0];
    },
    setStudent: (state, action) => {
      state.student = action.payload;
      pathToStorage.saveToStorage('student', action.payload);
    },
    setTestArr: (state, action) => {
      state.testArr = action.payload;
    },
    setAllDone: (state, action) => {
      state.allDone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStudent,
  setData,
  setCategory,
  setTestArr,
  saveTest,
  testCompleted,
  setAllDone,
} = englishSlice.actions;

export default englishSlice.reducer;
