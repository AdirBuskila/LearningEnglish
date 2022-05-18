// import { data } from '../services/learn.service';
import { QuestionPage } from './question-page';
import { useState } from 'react';

export const PracticePage = () => {
  const [curQuestion, setCurQuestion] = useState(null);
  const [quesIdx, setQuesIdx] = useState(0);
  const loadTest = () => {
    // setCurQuestion(data[quesIdx]);
  };

  const nextQuestion = () => {
    setQuesIdx(quesIdx + 1);
    console.log('quesIdx :>> ', quesIdx);
    // if (data.length - 1 === quesIdx) {
    //   alert('Well Done! Another Test Completed 💪');
    //   return;
    // } else {
    //   loadTest();
    // }
  };
  return (
    <section className='animals-page flex column align-center'>
      <h1>Animals Page</h1>
      {/* <QuestionPage question={data[quesIdx]} nextQuestion={nextQuestion} /> */}
    </section>
  );
};
