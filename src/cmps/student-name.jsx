import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GetNumCategories } from '../services/learn.service';
import { utilService } from '../services/util.service';
import { setAllDone } from '../store/englishSlice';

export const StudentName = (props) => {
  const { student } = props;
  const allDone = useSelector((state) => state.english.allDone);
  const [colorMode, setColorMode] = useState(false);

  const nameDisplay = (student, className = '') => {
    console.log('allDone :>> ', allDone);
    if (allDone) className = 'win';
    if (!colorMode) {
      return (
        <h1 className={className}>
          Welcome back{' '}
          <span onClick={() => setColorMode(!colorMode)}>
            {student.fullName}
          </span>
        </h1>
      );
    } else {
      return (
        <h1 className={className}>
          Welcome back{' '}
          <span onClick={() => setColorMode(!colorMode)}>
            {coloredName(student)}
          </span>
        </h1>
      );
    }
  };

  const coloredName = (student) => {
    return student.fullName.split('').map((l, idx) => {
      return (
        <span key={idx} style={{ color: utilService.getPrettyColor() }}>
          {l}
        </span>
      );
    });
  };

  return (
    <div className='title-container'>
      {!colorMode && nameDisplay(student)}
      {colorMode && nameDisplay(student)}
    </div>
  );
};
