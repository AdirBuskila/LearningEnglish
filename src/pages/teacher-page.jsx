import { useSelector } from 'react-redux';
import { StudentsScores } from '../cmps/student-scores';

export const TeacherPage = () => {
  const data = useSelector((state) => state.english.data);
  if (!data) return <></>;
  return (
    <div className='teacher-page flex column justify-center align-center'>
      <h1>Teacher's Page</h1>
      <StudentsScores />
    </div>
  );
};
