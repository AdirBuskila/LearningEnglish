import { useSelector, useDispatch } from 'react-redux';
import { pathToStorage } from '../services/storage.service';
import { setStudent } from '../store/englishSlice';
import { clearMsg } from '../store/userMsgSlice';
import { ChangeBackground } from './changeBackground';
import { UpdateForm } from './updateForm';

export const UserMsg = () => {
  const msg = useSelector((state) => state.userMsg.msg);
  const student = useSelector((state) => state.english.student);
  const dispatch = useDispatch();

  const updateUser = (e) => {
    e.preventDefault();
    let fullName = e.target[0].value;
    if (!fullName) return;

    fullName = fullName.trim();
    const newStudent = { ...student, fullName };

    e.target[0].value = '';
    dispatch(clearMsg());

    pathToStorage.saveToStorage('student', newStudent);
    dispatch(setStudent(newStudent));
  };

  const editMode = () => {
    return msg.msgClass.includes('fresh-air edit') ? true : false;
  };

  const backgroundMode = () => {
    return msg.msgClass.includes('background') ? true : false;
  };

  if (!msg) return <></>;
  const { txt, msgClass } = msg;
  return (
    <div className='user-msg-container'>
      <div className={msgClass + ' user-msg'}>
        <p className='strokeme'>{txt}</p>
        {editMode() && <UpdateForm updateUser={updateUser} />}
        {backgroundMode() && <ChangeBackground />}
        <button className='clear-btn' onClick={() => dispatch(clearMsg())}>
          x
        </button>
      </div>
    </div>
  );
};
