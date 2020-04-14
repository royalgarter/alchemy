import LANGUAGE from "../Language/language";
import Alert from "../Alert/alert";
import Hint from "../Hint/hint";

class Menu {
  constructor(save, library) {
    this.library = library;
    this.save = save;
    this.resetNode = Menu.getNode(".menu__reset");
    this.uploadsaveNode =  document.querySelector(".menu__uploadsave");
    this.savegameNode = Menu.getNode(".menu__savegame");
    this.hintNode = Menu.getNode(".menu__hint");
    this.languageNode = document.querySelector(".menu__language");
    Menu.setDefaultLanguage();
    this.setHandlers();
  }

  static getNode(selector) {
    const button = document.querySelector(selector), stringsName = selector.slice(1);
    button.textContent = LANGUAGE.strings[stringsName][LANGUAGE.locale];
    return button;
  }

  static setDefaultLanguage() {
    const language = LANGUAGE.locale ? LANGUAGE.locale : "en";
    const options = document.querySelectorAll(".menu__language option");
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === language) options[i].defaultSelected = true;
    }
  }

  static languageHandler(e) {
    e.preventDefault();
    const language = e.target.value === "en" ? null : e.target.value;
    localStorage.setItem("alchemicalLng", JSON.stringify(language));
    Menu.reloadPage();
  }

  resetHandler(e) {
    e.preventDefault();
    this.save.removeRecord();
    Menu.reloadPage();
  }

  savegameHandler() {
    const data = JSON.stringify(this.save.record);
    const type = "text/plain;charset=utf-8";
    const file = new Blob([data], {type});
    const link = document.createElement("a");

    link.classList.add("visually-hidden");
    link.href = URL.createObjectURL(file);
    link.download = "alchemical save";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  uploadsaveHandler(e) {
    const file = e.target.files[0];

    if (file) {
      if (isExtensionCorrect()) {
        let reader = new FileReader();
        reader.readAsText(file);

        reader.onload = () => {
          const result = JSON.parse(reader.result);
          this.save.updateRecord(result);
          Menu.reloadPage();
        };

        reader.onabort = function() {
          e.target.value = ""
        };
      }
      else {
        e.target.value = "";
        const text = document.createElement("p");
        text.textContent = `${LANGUAGE.strings["sorry_file"][LANGUAGE.locale]} ${file.name} ${LANGUAGE.strings["wrong_extension"][LANGUAGE.locale]}`;
        text.style.textAlign = `center`;
        const textButton = LANGUAGE.strings["got_it"][LANGUAGE.locale];
        new Alert(text, textButton).show();
        return
      }
    }

    function isExtensionCorrect() {
      return file.name.slice(-4) === '.txt';
    }
  }

  static reloadPage() {
    // document.location.reload(true);
    location.reload()
  }

  hintHandler() {
    new Hint(this.library).show();
  }

  setHandlers() {
    this.resetNode
      .addEventListener("click", (e)=> this.resetHandler(e));
    this.uploadsaveNode
      .addEventListener("change", (e)=> this.uploadsaveHandler(e));
    this.savegameNode
      .addEventListener("click", (e)=> this.savegameHandler(e));
    this.hintNode
      .addEventListener("click", (e)=> this.hintHandler(e));
    this.languageNode
      .addEventListener("change", (e)=> Menu.languageHandler(e));
  }
}

export default Menu;