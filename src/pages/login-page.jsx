import { useSelector, useDispatch } from 'react-redux';
import { setStudent } from '../store/englishSlice';
import { useNavigate } from 'react-router-dom';
import { pathToStorage } from '../services/storage.service';
import { useEffect } from 'react';

export const LoginPage = () => {
  const student = useSelector((state) => state.english.student);
  const user = pathToStorage.loadFromStorage('student');
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && !student) {
      dispatch(setStudent(user));
      console.log('loaded from storage');
      navigate('/home');
    }
  });

  const user1 = {
    fullName: 'Adir Buskila',
    id: 209,
    scores: [],
  };

  const onLogin = (e) => {
    e.preventDefault();
    const value = +e.nativeEvent.target[0].value;
    // if (value === user1.id) {
    dispatch(setStudent(user1));
    navigate('/home');
    // }
  };

  return (
    <section className='login-page flex column align-center justify-center'>
      <div className='login-container flex column align-center justify-center'>
        <h2>
          Welcome To "Learning English" Login or type in <span>209</span>
        </h2>
        <form className='flex column' onSubmit={onLogin}>
          <input
            className='login-input'
            placeholder='Enter phone number...'
            name='phone-number'
            id='phone-number'
            type='numeric'
          />
          <button className='button-21'>Log-in</button>
        </form>
      </div>
    </section>
  );
};
