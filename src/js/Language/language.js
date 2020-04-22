class Language {
  constructor() {
    this.locale = localStorage.alchemicalLng ?
      JSON.parse(localStorage.alchemicalLng) : null;
    this.sortProperty = this.setSortProperty();
    this.strings = {};
  }

  setSortProperty() {
    return this.locale ? this.locale : "name";
  }

  addString(name, obj) {
    if (this.strings[name]) throw new Error(`A string with the following Name: "${name}" is already exists. Please set another name for the sting`);
    this.strings[name] = obj;
  }
}

const LANGUAGE = new Language();

LANGUAGE.addString("elements", {
  null: "Elements",
  ukr: "Елементи",
  ru: "Элементы",
});
LANGUAGE.addString("desk__reset", {
  null: "Clear desk",
  ukr: "Очистити",
  ru: "Очистить"
});
LANGUAGE.addString("menu__reset", {
  null: "Reset Game and reload page",
  ukr: "Скинути результат і перезавантажити сторінку",
  ru: "Сбросить результат и перезагрузить страницу",
});
LANGUAGE.addString("menu__uploadsave-label", {
  null: "Load Game",
  ukr: "Завантажити гру",
  ru: "Загрузить игру",
});
LANGUAGE.addString("menu__savegame", {
  null: "Save Game",
  ukr: "Зберігти гру",
  ru: "Сохранить игру",
});
LANGUAGE.addString("menu__hint", {
  null: "Get a hint",
  ukr: "Отримати підсказку",
  ru: "Получить подсказку",
});
LANGUAGE.addString("menu__hidefinallabel", {
  null: "Show final elements in the list",
  ukr: "Показувати елементи що не комбінються",
  ru: "Показывать некомбинируемые элементы"
});
LANGUAGE.addString("got_it", {
  null: "Got it",
  ukr: "Зрозумів",
  ru: "Понял",
});
LANGUAGE.addString("wrong_extension", {
  null: "has the wrong extension",
  ukr: "має неправильне розширення",
  ru: "имеет неправильное расширение",
});
LANGUAGE.addString("sorry_file", {
  null: "Sorry, the file",
  ukr: "Вибачте, файл",
  ru: "Извините, файл",
});
LANGUAGE.addString("did_know", {
  null: "Did you know?",
  ukr: "Чи ви знали що?",
  ru: "А вы знали что?",
});

export default LANGUAGE;

