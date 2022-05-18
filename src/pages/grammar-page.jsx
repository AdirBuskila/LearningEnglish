// import { data } from '../services/learn.service';
import { QuestionPage } from './question-page';
import { useState } from 'react';

export const GrammarPage = () => {
  const [curQuestion, setCurQuestion] = useState(null);
  const [quesIdx, setQuesIdx] = useState(0);
  const loadTest = () => {
    // setCurQuestion(data[quesIdx]);
  };

  const nextQuestion = () => {
    setQuesIdx(quesIdx + 1);
    // console.log('data.length :>> ', data.length);
    console.log('quesIdx :>> ', quesIdx);
    // if (data.length - 1 === quesIdx) {
    //   alert('Well Done! Another Test Completed 💪');
    //   return;
    // } else {
    //   loadTest();
    // }
  };
  return (
    <section className='grammar-page flex column align-center'>
      <h1>Grammar Page</h1>
      {/* <QuestionPage question={data[quesIdx]} nextQuestion={nextQuestion} /> */}
    </section>
  );
};
