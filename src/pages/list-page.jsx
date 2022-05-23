// import { animalsData } from '../services/learn.service';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setData } from '../store/englishSlice';
import { utilService } from '../services/util.service';
import { TestsList } from '../cmps/testsList';
import { QuestionPage } from './question-page';
import { AppHeader } from '../cmps/app-header';

export const ListPage = () => {
  const category = useSelector((state) => state.english.category);
  const data = useSelector((state) => state.english.data);
  const testArr = useSelector((state) => state.english.testArr);
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) dispatch(setData());
    dispatch(setCategory(type));
  });

  if (!category) return <></>;
  return (
    <section className='list-page flex column align-center'>
      <AppHeader />
      <div className='list-title-container'>
        <h1>{utilService.UpperCase(category.type)} Tests</h1>
      </div>
      {!testArr && <TestsList />}
      {testArr && <QuestionPage />}
    </section>
  );
};
