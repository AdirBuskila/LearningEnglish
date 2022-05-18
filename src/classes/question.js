export class Question {
  #questionTitle = document.querySelector('h2.question');
  #answerInput = document.querySelector('input.answer-input');
  #submitBtn = document.querySelector('button.submit-btn');
  #type;
  id;
  ques;
  answer;

  constructor(id, type, ques, answer) {
    this.id = id;
    this.#type = type;
    this.ques = ques;
    this.answer = answer;
  }

  renderQuestion() {
    this.#questionTitle.textContent = this.ques;
  }

  checkAnswer() {
    console.log(this.#answerInput.value);
  }

  sayHello() {
    console.log(`Hi, im ${this.fullName} and my ID is:${this.id}`);
  }
}
