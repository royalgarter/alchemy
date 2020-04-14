class Save {
  constructor() {
    this.record = Save.isRecodInLocalStorage() ?
      JSON.parse(localStorage.alchemical) :
      undefined;
  }

  static isRecodInLocalStorage() {
    return Boolean(localStorage.alchemical);
  }

  updateRecord(record) {
    localStorage.setItem('alchemical', JSON.stringify(record));
    this.record = record;
  }

  removeRecord() {
    localStorage.removeItem('alchemical');
  }
}

export default Save;