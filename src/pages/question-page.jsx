import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearMsg, setMsg } from '../store/userMsgSlice';
import { useNavigate } from 'react-router';
import { setTestArr } from '../store/englishSlice';
import { utilService } from '../services/util.service';

export const QuestionPage = () => {
  const dispatch = useDispatch();
  const testArr = useSelector((state) => state.english.testArr);
  const category = useSelector((state) => state.english.category);

  const navigate = useNavigate();

  const [curQues, setCurQues] = useState(null);
  const [QuesIdx, setQuesIdx] = useState(0);

  useEffect(() => {
    setCurQues(testArr[QuesIdx]);
    console.log('curQues :>> ', curQues);
  });

  const getAnswer = (e) => {
    e.preventDefault();
    const ans = e.target[0].value.trim().toLowerCase();
    console.log('ans :>> ', ans);
    if (ans === curQues.answer) {
      e.target[0].value = '';
      rightAnswer();
    } else {
      e.target[0].value = '';
      wrongAnswer();
    }
  };

  const rightAnswer = () => {
    const isFinal = QuesIdx + 1 === testArr.length ? true : false;
    if (isFinal) {
      dispatch(
        setMsg({
          txt: '💪 Another test completed! 💪',
          msgClass: `party party-${utilService.getRandomIntInclusive(1, 3)}`,
        })
      );
      setTimeout(() => {
        dispatch(clearMsg());
        dispatch(setTestArr(null));
      }, 2500);
    } else {
      dispatch(setMsg({ txt: '🤩 You are correct! 🤩', msgClass: 'success' }));
      setTimeout(() => {
        dispatch(clearMsg());
        setQuesIdx(QuesIdx + 1);
      }, 2000);
    }
  };

  const wrongAnswer = () => {
    dispatch(setMsg({ txt: '😬 Try Again! 😬', msgClass: 'error' }));
    setTimeout(() => {
      dispatch(clearMsg());
    }, 2000);
  };

  if (!curQues) return <p>No Test</p>;
  const { ques } = curQues;
  return (
    <div className='question-container flex column align-center'>
      <h2 className='question-title'>{ques}</h2>
      {curQues.img && (
        <img className='question-img' src={curQues.img} alt='img' />
      )}
      <form
        className='form-container flex column'
        onSubmit={(e) => getAnswer(e)}
      >
        <input className='answer-input' type='text' />
        <button className='submit-btn button-21'>Enter</button>
      </form>
    </div>
  );
};
