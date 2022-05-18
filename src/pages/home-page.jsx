import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setStudent, setData, setTestArr } from '../store/englishSlice';
import { pathToStorage } from '../services/storage.service';
import { Categories } from '../cmps/categories';
import { QuestionPage } from './question-page';
import { categories } from '../services/learn.service';
import { AppHeader } from '../cmps/app-header';

export const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.english.data);
  const testArr = useSelector((state) => state.english.testArr);
  const student = useSelector((state) => state.english.student);
  const user = pathToStorage.loadFromStorage('student');
  useEffect(() => {
    if (!data) dispatch(setData());
    if (testArr) dispatch(setTestArr(null));
    if (user && !student) dispatch(setStudent(user));
  });

  if (!data) return <></>;

  return (
    <section className='home-page flex column justify-start'>
      <div className='title-container'>
        {student && <h1>Welcome back {student.fullName}!</h1>}
      </div>
      <Categories />
    </section>
  );
};
