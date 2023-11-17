class NumberSchema {
  constructor(option) {
    this.option = option || {};
  }

  isValid(data) {
    const type = typeof data === 'number';
    if (Object.hasOwn(this.option, 'even') && type) {
      return data % 2 === 0;
    }
    if (Object.hasOwn(this.option, 'odd') && type) {
      return data % 2 !== 0;
    }
    return type;
  }
  // eslint-disable-next-line
  even() {
    return new NumberSchema({ even: true });
  }
  // eslint-disable-next-line
  odd() {
    return new NumberSchema({ odd: true });
  }
}
export default NumberSchema;
