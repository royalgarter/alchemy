class Alert {
  constructor(inner, buttonText) {
    this.inner = inner;
    this.buttonText = buttonText;
    this.createNode();
  }

  createNode() {
    this.node = document.createElement("div");
    this.node.classList.add("alert");

    const wrapper = document.createElement("div");
    wrapper.classList.add("alert__window");

    const button = document.createElement("button");
    button.classList.add("alert__button");
    button.textContent = this.buttonText;
    button.addEventListener("click",() => this.hide());

    wrapper.appendChild(this.inner);
    wrapper.appendChild(button);
    this.node.appendChild(wrapper);
  }

  show() {
    document.body.appendChild(this.node);
  }

  hide() {
    document.body.removeChild(this.node);
  }
}

export default Alert;