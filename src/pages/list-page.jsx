// import { animalsData } from '../services/learn.service';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setData } from '../store/englishSlice';
import { utilService } from '../services/util.service';
import { TestsList } from '../cmps/testsList';
import { QuestionPage } from './question-page';

export const ListPage = () => {
  const category = useSelector((state) => state.english.category);
  const data = useSelector((state) => state.english.data);
  const testArr = useSelector((state) => state.english.testArr);
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) dispatch(setData());
    dispatch(setCategory(type));
    console.log('category :>> ', category);
  });

  if (!category) return <></>;
  return (
    <section className='animals-page flex column align-center'>
      <h1>{utilService.UpperCase(category.type)} Tests</h1>
      {!testArr && <TestsList />}
      {testArr && <QuestionPage />}
    </section>
  );
};
