let stamp = Date.now();

export default class ArgumentItem {
  constructor(name, value) {
    this.id = stamp++; 
    this.name = this.use(name).if('string');
    this.value = this.use(value).if('string');
  }

  use(val) {
    let defaults = {
      string: ''
    };

    return {
      if: (type) => {
        if (val && typeof val !== type) throw new TypeError();
        return val || defaults[type];
      }
    };
  }
}
