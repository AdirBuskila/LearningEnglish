// import { numbersData } from '../services/learn.service';
import { QuestionPage } from './question-page';
import { useState } from 'react';

export const NumbersPage = () => {
  const [curQuestion, setCurQuestion] = useState(null);
  const [quesIdx, setQuesIdx] = useState(0);
  const loadTest = () => {
    // setCurQuestion(numbersData[quesIdx]);
  };

  const nextQuestion = () => {
    setQuesIdx(quesIdx + 1);
    console.log('quesIdx :>> ', quesIdx);
    // if (numbersData.length - 1 === quesIdx) {
    //   alert('Well Done! Another Test Completed 💪');
    //   return;
    // } else {
    //   loadTest();
    // }
  };
  return (
    <section className='numbers-page flex column align-center'>
      <h1>Numbers Page</h1>
      <QuestionPage
        // question={numbersData[quesIdx]}
        nextQuestion={nextQuestion}
      />
    </section>
  );
};
