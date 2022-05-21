import { useSelector } from 'react-redux';
import { CategoriesList } from './categoriesList';

export const Categories = () => {
  const data = useSelector((state) => state.english.data);

  return <CategoriesList data={data.categories} />;
};
