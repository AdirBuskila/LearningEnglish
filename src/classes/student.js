// import lear

export class Student {
  #id;
  fullName;
  scores = [];

  constructor(id, fullName) {
    this.#id = id;
    this.fullName = fullName;
  }

  takeTest(questions) {}

  sayHello() {
    console.log(`Hi, im ${this.fullName} and my ID is:${this.#id}`);
  }
}
