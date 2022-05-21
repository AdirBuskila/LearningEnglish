import { useSelector, useDispatch } from 'react-redux';
import { setData, setStudent } from '../store/englishSlice';
import { useNavigate } from 'react-router-dom';
import { pathToStorage } from '../services/storage.service';
import { useEffect } from 'react';

export const LoginPage = () => {
  const student = useSelector((state) => state.english.student);
  const data = useSelector((state) => state.english.data);
  const user = pathToStorage.loadFromStorage('student');
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(setData());
    }
  }, [data]);

  useEffect(() => {
    if (user?.id === 'pass123') {
      dispatch(setStudent(user));
      navigate('/teacher');
      return;
    }
    if (user) {
      dispatch(setStudent(user));
      navigate('/home');
      return;
    }
  }, []);

  const user1 = {
    fullName: 'Adir Buskila',
    id: 209,
    completedTests: [],
  };
  let newUser = {
    fullName: '',
    id: 210,
    completedTests: [],
  };

  const onLogin = (e) => {
    e.preventDefault();
    const value = e.nativeEvent.target[0].value;
    if (value === data.teacher.id) {
      dispatch(setStudent(data.teacher));
      navigate('/teacher');
    } else {
      newUser.fullName = value;
      dispatch(setStudent(newUser));
      navigate('/home');
    }
  };

  return (
    <section className='login-page flex column align-center justify-center'>
      <div className='login-container flex column align-center justify-center'>
        <h2>
          Welcome To "Learning English" type in your <span>Full name</span> to
          begin your journey!
        </h2>
        <form className='flex column' onSubmit={onLogin}>
          <input
            className='login-input'
            placeholder='Enter full name...'
            autoComplete='off'
            name='fullName'
            id='fullName'
            type='text'
          />
          <button className='button-21'>Log-in</button>
        </form>
      </div>
    </section>
  );
};
