import { useSelector, useDispatch } from 'react-redux';
import { clearMsg } from '../store/userMsgSlice';

export const UserMsg = () => {
  const msg = useSelector((state) => state.userMsg.msg);
  const dispatch = useDispatch();

  if (!msg) return <></>;
  const { txt, msgClass } = msg;
  return (
    <div className='user-msg-container'>
      <div className={msgClass + ' user-msg'}>
        <p>{txt}</p>
        <button onClick={() => dispatch(clearMsg())}>x</button>
      </div>
    </div>
  );
};
