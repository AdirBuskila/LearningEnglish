import { useSelector } from 'react-redux';
import { checkIfDone } from '../services/learn.service';
import { useDispatch } from 'react-redux';
import { setTestArr } from '../store/englishSlice';

export const TestPreview = (props) => {
  const student = useSelector((state) => state.english.student);
  const dispatch = useDispatch();

  const testClass = (test) => {
    return checkIfDone(student.fullName, test)
      ? 'test-preview-container pointer done flex'
      : 'test-preview-container pointer flex';
  };

  const { test, idx } = props;
  return (
    <div onClick={() => dispatch(setTestArr(test))} className={testClass(test)}>
      <p>{idx + 1}</p>
    </div>
  );
};
