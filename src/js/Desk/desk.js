import LANGUAGE from "../Language/language";

class Desk {
  constructor() {
    this.node = document.querySelector(".desk");
    this.resetButtonNode = Desk.getResetButton();
    this.setHandlers();
  }

  setHandlers() {
    this.resetButtonNode.addEventListener("click",() => this.clearListHandler());
  }

  static getResetButton() {
    const button = document.querySelector(`.desk__reset`);
    button.textContent = LANGUAGE.strings["desk__reset"][LANGUAGE.locale];
    return button;
  }

  updateList() {
    const list = document.querySelectorAll(".desk .library__item");
    this.list = [];
    for (let i = 0; i < list.length; i++) {
      this.list.push(list[i]);
    }
  }

  clearListHandler() {
    this.node.innerHTML = "";
  }
}

export default Desk;