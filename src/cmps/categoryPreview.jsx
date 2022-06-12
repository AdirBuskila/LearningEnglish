import { setCategory } from '../store/englishSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const CategoryPreview = (props) => {
  const dispatch = useDispatch();
  const { category } = props;

  const categoryClass = (cat) => {
    return 'category ' + category.type + '-cat';
  };
  const categoryName = (cat) => {
    return cat.type[0].toUpperCase() + cat.type.slice(1);
  };

  const categoryStyle = (cat) => {
    let style;
    if (!cat.img) {
      style = {
        backgroundImage: `${cat.background}`,
      };
    } else {
      style = {
        backgroundImage: `url(${cat.img})`,
        backgroundSize: 'cover',
      };
    }
    return style;
  };

  const onSetCategory = () => {
    dispatch(setCategory(category.type));
    window.scrollTo(0, 0);
  };

  return (
    <Link style={{ display: 'contents' }} to={`/category/${category.type}`}>
      <div
        onClick={onSetCategory}
        style={categoryStyle(category)}
        className={categoryClass(category)}
      >
        <p className='strokeme'>{categoryName(category)}</p>
      </div>
    </Link>
  );
};
