import ELEMENTS from "../Elements/elements";
import LANGUAGE from "../Language/language";
import ElementNode from "../ElementNode/element-node";
import Alert from "../Alert/alert";

class Hint {
  constructor(library) {
    this.libraryElements = library.list;
    this.notFinalElements = this.getNotFinalElements();
    this.notReadyElements = this.getNotReadyElements();
    this.hint = this.getHintElements();
  }

  getNotFinalElements() {
    return this.libraryElements.filter( e => !e.final)
  }

  getNotReadyElements() {
    let elements = {...ELEMENTS};
    this.libraryElements.forEach( e => {
      delete elements[e.id];
    });

    return Object.values(elements).sort(Hint.makeRandomArr);
  }

  static makeRandomArr() {
    return Math.random() - 0.5;
  }

  getHintElements() {
    for (let i = 0; i < this.notReadyElements.length; i++ ) {
      let firstElement = this.notReadyElements[i].id.split("$")[0];
      let secondElement = this.notReadyElements[i].id.split("$")[1];
      let checker = 0;
      this.notFinalElements.some( e => {
        if (e.name === firstElement) {
          firstElement = e;
          checker++;
          return true;
        }
      });

      this.notFinalElements.some( e => {
        if (e.name === secondElement) {
          secondElement = e;
          checker++;
          return true;
        }
      });

      if (checker === 2) return {
        result: this.notReadyElements[i],
        firstElement,
        secondElement
      }
    }
  }

  show() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("hint");

    const heading = document.createElement("h2");
    heading.textContent = LANGUAGE.strings["did_know"][LANGUAGE.locale];
    heading.classList.add("hint__heading");

    const formula = document.createElement("div");
    formula.classList.add("hint__formula");

    const first = document.createElement("div");
    first.classList.add("hint__element");

    const plus = document.createElement("span");
    plus.textContent = "+";
    const equal = document.createElement("span");
    equal.textContent = "=";

    const second = document.createElement("div");
    second.classList.add("hint__element");

    const result = document.createElement("div");
    result.classList.add("hint__element");

    new ElementNode(this.hint.firstElement, first).appendElement();
    new ElementNode(this.hint.secondElement, second).appendElement();
    new ElementNode(this.hint.result, result).appendElement();

    formula.appendChild(first);
    formula.appendChild(plus);
    formula.appendChild(second);
    formula.appendChild(equal);
    formula.appendChild(result);

    wrapper.appendChild(heading);
    wrapper.appendChild(formula);

    const textButton = LANGUAGE.strings["got_it"][LANGUAGE.locale];

    new Alert(wrapper, textButton).show();
  }
}

export default Hint;