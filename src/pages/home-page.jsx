import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setStudent, setData, setTestArr } from '../store/englishSlice';
import { pathToStorage } from '../services/storage.service';
import { Categories } from '../cmps/categories';
import { QuestionPage } from './question-page';
import { categories } from '../services/learn.service';
import { AppHeader } from '../cmps/app-header';
import { Dashboard } from '../cmps/dashboard';
import { utilService } from '../services/util.service';

export const HomePage = () => {
  const dispatch = useDispatch();
  const user = pathToStorage.loadFromStorage('student');
  const data = useSelector((state) => state.english.data);
  const testArr = useSelector((state) => state.english.testArr);
  const student = useSelector((state) => state.english.student);

  const [colorMode, setColorMode] = useState(false);

  useEffect(() => {
    if (!data) dispatch(setData());
    if (testArr) dispatch(setTestArr(null));
    if (user && !student) dispatch(setStudent(user));
    if (user.scores) {
      pathToStorage.saveToStorage('student', {
        fullName: 'Adir Buskila',
        id: 209,
        completedTests: [],
      });
      dispatch(setStudent(pathToStorage.loadFromStorage('student')));
    }
  });

  const coloredName = () => {
    if (!student) return;
    return student.fullName.split('').map((l) => {
      return <span style={{ color: utilService.getPrettyColor() }}>{l}</span>;
    });
  };

  coloredName();

  if (!data) return <></>;

  return (
    <section className='home-page flex column justify-start'>
      <div className='title-container'>
        {student && !colorMode && (
          <h1>
            Welcome back{' '}
            <span onClick={() => setColorMode(!colorMode)}>
              {student.fullName}
            </span>
            !
          </h1>
        )}
        {student && colorMode && (
          <h1>
            Welcome back{' '}
            <span onClick={() => setColorMode(!colorMode)}>
              {coloredName()}
            </span>
            !
          </h1>
        )}
      </div>
      <Dashboard />
      <Categories />
    </section>
  );
};
