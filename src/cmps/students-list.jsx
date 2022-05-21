import { StudentRow } from './student-row';

export const StudentsList = (props) => {
  const { students } = props;
  return (
    <>
      {students.map((s) => {
        return <StudentRow student={s} />;
      })}
    </>
  );
};
