import { useSelector } from 'react-redux';
import { CategoriesList } from './categoriesList';
import { TestPreview } from './testPreview';

export const TestsList = () => {
  const category = useSelector((state) => state.english.category);
  const { tests } = category;
  return (
    <div className='tests-list-container'>
      {tests.map((test, idx) => {
        return <TestPreview key={idx} test={test} idx={idx} />;
      })}
    </div>
  );
};
