import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { clearMsg, setMsg } from '../store/userMsgSlice';
import { setTestArr, testCompleted } from '../store/englishSlice';
import { utilService } from '../services/util.service';
import { getHint, msgObj } from '../services/learn.service';

export const QuestionPage = () => {
  const synth = window.speechSynthesis;
  const dispatch = useDispatch();
  const testArr = useSelector((state) => state.english.testArr);
  const inputRef = useRef(null);

  const [curQues, setCurQues] = useState(null);
  const [curSound, setCurSound] = useState(null);
  const [curHint, setCurHint] = useState(null);
  const [QuesIdx, setQuesIdx] = useState(0);
  const [hintShown, setHintShown] = useState(false);
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    setTimePassed(false);
    setHintShown(false);
    setCurQues(testArr[QuesIdx]);
    setCurSound(new SpeechSynthesisUtterance(testArr[QuesIdx].answer));
    if (inputRef.current) inputRef.current.focus();
    setTimeout(() => {
      setTimePassed(true);
      setCurHint(getHint(testArr[QuesIdx].answer));
    }, 7000);
  }, [testArr, QuesIdx]);

  const getAnswer = (e) => {
    e.preventDefault();
    const ans = e.target[0].value.trim().toLowerCase();
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
      dispatch(testCompleted(curQues._id));
      const party = {
        ...msgObj.party,
        msgClass: `party party-${utilService.getRandomIntInclusive(1, 15)}`,
      };
      dispatch(setMsg(party));
      setTimeout(() => {
        dispatch(clearMsg());
        dispatch(setTestArr(null));
      }, 3000);
    } else {
      dispatch(setMsg(msgObj.correct));
      dispatch(testCompleted(curQues._id));
      setHintShown(false);
      setTimeout(() => {
        setQuesIdx(QuesIdx + 1);
        setCurHint(getHint(testArr[QuesIdx].answer));
        dispatch(clearMsg());
      }, 1500);
    }
  };

  const wrongAnswer = () => {
    dispatch(setMsg(msgObj.wrong));
    setTimeout(() => {
      dispatch(clearMsg());
    }, 2000);
  };

  const playSound = () => {
    synth.speak(curSound);
  };

  if (!curQues) return <p>No Test</p>;
  const { ques } = curQues;
  return (
    <div className='question-container flex column align-center'>
      <h1 className='question-title'>{ques}</h1>
      {curQues.img && (
        <img className='question-img' src={curQues.img} alt='img' />
      )}
      {curQues.color && (
        <div style={{ backgroundColor: curQues.color }} className='color'></div>
      )}
      <button onClick={playSound} className='sound-btn button-21'>
        <img
          className='sound-img'
          src='https://res.cloudinary.com/dubjerksn/image/upload/v1657052750/English/d0uusalsuqq3wo5ple9d.png'
        />
      </button>
      {!hintShown && timePassed && (
        <div onClick={() => setHintShown(true)} className='hint button-21'>
          <p>Hint</p>
        </div>
      )}
      {hintShown && (
        <div className='hint button-21'>
          <p>{curHint}</p>
        </div>
      )}
      <form
        className='form-container flex column'
        onSubmit={(e) => getAnswer(e)}
      >
        <input
          name='answer'
          id='answer'
          autoComplete='off'
          placeholder='Answer here...'
          ref={inputRef}
          className='answer-input'
          type='text'
        />

        <button className='submit-btn button-21'>Enter</button>
      </form>
    </div>
  );
};
