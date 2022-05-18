import { CategoryPreview } from './categoryPreview';

export const CategoriesList = (props) => {
  const { data } = props;
  return (
    <div className='categories-container'>
      {data.map((category) => {
        return <CategoryPreview key={category.type} category={category} />;
      })}
    </div>
  );
};
