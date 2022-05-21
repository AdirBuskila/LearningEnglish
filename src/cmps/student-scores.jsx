import { useSelector } from 'react-redux';
import { CategoriesTable } from './categories-table';
import { StudentsList } from './students-list';

export const StudentsScores = () => {
  const data = useSelector((state) => state.english.data);
  const { categories, students } = data;
  return (
    <div className='students-scores-container flex'>
      <table>
        <CategoriesTable categories={categories} />
        <StudentsList students={students} />
      </table>
    </div>
  );
};
