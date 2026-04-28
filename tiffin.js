// sort of inner working of event listeners
const btnRef = {
  listeners: [],
  addEventListener(cb) {
    this.listeners.push(cb);
  },
  browserMaiClick: function () {
    for (const fn of this.listeners) {
      fn();
    }
  },
};

btnRef.addEventListener(function () {});
