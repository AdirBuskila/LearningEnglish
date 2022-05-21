import { useSelector } from 'react-redux';
import { getStudentStats } from '../services/learn.service';

export const StudentRow = (props) => {
  const data = useSelector((state) => state.english.data);
  const { student } = props;
  const statObj = getStudentStats(student, data.categories);

  return (
    <tr>
      <td>{student.fullName}</td>
      {statObj.map((score) => {
        return <td>{score}</td>;
      })}
    </tr>
  );
};
