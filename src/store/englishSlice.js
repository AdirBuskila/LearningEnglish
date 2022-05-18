import { createSlice } from '@reduxjs/toolkit';
import { pathToStorage } from '../services/storage.service';
import { categories } from '../services/learn.service';

export const englishSlice = createSlice({
  name: 'learn-english',
  initialState: {
    data: null,
    category: null,
    testArr: null,
    student: null,
  },
  reducers: {
    setData: (state) => {
      state.data = categories;
      console.log(state.data);
    },
    saveTest: (state, action) => {
      // category
      console.log('state.category :>> ', state.category);
      console.log('state.000 :>> ', state.data[0].type);
      let category = state.data.findIndex((c) => c.type === state.category);
      console.log(
        'state.data.indexOf(category) :>> ',
        state.data.indexOf(category)
      );
      console.log(state.data);
    },
    setCategory: (state, action) => {
      state.category = state.data.filter(
        (catg) => catg.type === action.payload
      )[0];
      console.log(state.category);
    },
    setStudent: (state, action) => {
      state.student = action.payload;
      pathToStorage.saveToStorage('student', action.payload);
      // console.log(state.student);
    },
    setTestArr: (state, action) => {
      state.testArr = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStudent, setData, setCategory, setTestArr, saveTest } =
  englishSlice.actions;

export default englishSlice.reducer;
