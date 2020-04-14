import ELEMENTS from "../Elements/elements";
import ElementNode from "../ElementNode/element-node";
import LANGUAGE from "../Language/language";

class Library {
  constructor(save) {
    this.save = save;
    this.node = document.querySelector(".library__list");
    this.list = save.record ? save.record : [...ELEMENTS.defaultElements];
    this.counter = {
      node: document.createElement("h2"),
      count: this.list.length
    };
    this.updateDOM();
  }

  addCounterNode() {
    const counter = document.createElement("h2");
    const content = LANGUAGE.strings["elements"][LANGUAGE.locale];
    counter.textContent = `${content} ${this.counter.count}/${Object.keys(ELEMENTS).length}`;
    counter.classList.add("library__heading");
    this.node.appendChild(counter);
    this.incrementCounter();
  }

  incrementCounter() {
    this.counter.count++;
  }

  updateDOM() {
    this.clearNode();
    this.sortList();
    this.addCounterNode();
    this.save.updateRecord(this.list);

    for (let i = 0; i < this.list.length; i++) {
      new ElementNode(this.list[i], this.node).appendElement();
    }
  }

  clearNode() {
    this.node.innerHTML = "";
  }

  sortList() {
    const type = LANGUAGE.sortProperty;
    this.list = this.list.sort(
      (a, b) => a[type] > b[type] ?  1
        : a[type] < b[type] ? -1 : 0
    )}

  isElementExists(id) {
    return this.list.some( item => item.id === id );
  }

  add(id) {
    if (this.isElementExists(id)) return;
    this.list.push(ELEMENTS.getElementById(id));
    this.updateDOM();
  }
}

export default Library;