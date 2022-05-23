import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setStudent, setData, setTestArr } from '../store/englishSlice';
import { pathToStorage } from '../services/storage.service';
import { Categories } from '../cmps/categories';
import { Dashboard } from '../cmps/dashboard';
import { StudentName } from '../cmps/student-name';
import { AppHeader } from '../cmps/app-header';

export const HomePage = () => {
  const dispatch = useDispatch();
  const user = pathToStorage.loadFromStorage('student');
  const data = useSelector((state) => state.english.data);
  const testArr = useSelector((state) => state.english.testArr);
  const student = useSelector((state) => state.english.student);

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

  if (!data) return <></>;

  return (
    <section className='home-page flex column justify-start'>
      <AppHeader />
      <StudentName student={student} />
      <Dashboard />
      <Categories />
    </section>
  );
};
