const object = {
  id: Date.now(),
  name: 'Javascript Proxy Example'
};

const proxy = new Proxy(object, {
  get(target, prop) {
    console.log(`Retrieving the ${prop} property from target..`);
    return target[prop];
  },

  set(target, prop, value) {
    console.log(`Setting the ${prop} property to "${value}"`);
    target[prop] = value;
  }
});

console.log(proxy.id);
// Retrieving the id property from target..
// 1584479974794

proxy.name = 'Updated name';
// Setting the name property to "Updated name"
