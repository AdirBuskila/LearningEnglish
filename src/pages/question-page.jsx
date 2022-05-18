import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { clearMsg, setMsg } from '../store/userMsgSlice';
import { saveTest, setTestArr } from '../store/englishSlice';
import { utilService } from '../services/util.service';
import { MarkTestArr } from '../services/learn.service';

export const QuestionPage = () => {
  const dispatch = useDispatch();
  const testArr = useSelector((state) => state.english.testArr);
  const category = useSelector((state) => state.english.category);
  const student = useSelector((state) => state.english.student);
  const inputRef = useRef(null);

  const [curQues, setCurQues] = useState(null);
  const [QuesIdx, setQuesIdx] = useState(4);

  useEffect(() => {
    setCurQues(testArr[QuesIdx]);
    if (inputRef.current) inputRef.current.focus();
  }, [QuesIdx]);

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
      const newTestArr = MarkTestArr(testArr, student.fullName);
      console.log('newTestArr :>> ', newTestArr);
      dispatch(saveTest());
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
        <input
          name='answer'
          id='answer'
          ref={inputRef}
          className='answer-input'
          type='text'
        />
        <button className='submit-btn button-21'>Enter</button>
      </form>
    </div>
  );
};
