const object = {
  _label: 'Setter-Getter',

  get label() {
    console.log('Getting label..');
    return this._label;
  },

  set label(_label) {
    console.log('Setting label..');
    this._label = _label;
  }
};

console.log(object.label);
// Getting label..
// Setter-Getter

object.label = 'Label updated';
// Setting label..
