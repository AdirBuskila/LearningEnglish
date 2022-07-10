import { useDispatch } from 'react-redux';
import { setMsg } from '../store/userMsgSlice';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const onSetMsg = (type) => {
    if (type === 'background') {
      dispatch(
        setMsg({
          txt: 'Select Background from the options',
          msgClass: `party background fresh-air`,
        })
      );
    }
    if (type === 'fullName') {
      dispatch(
        setMsg({
          txt: 'Enter new full name',
          msgClass: `party fresh-air edit`,
        })
      );
    }
  };

  return (
    <div className='dashboard'>
      <div onClick={() => onSetMsg('background')} className='option'>
        <p>Change Background</p>
      </div>
      <div onClick={() => onSetMsg('fullName')} className='option'>
        <p>Change Name</p>
      </div>
    </div>
  );
};
