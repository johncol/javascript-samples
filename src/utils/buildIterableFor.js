const buildIterableFor = (object, ...fields) => {
  return () => {
    let props = fields.map(field => object[field]);
    return props[Symbol.iterator]();
  };
};

// HOW TO USE IT:

const author = {
  name: 'John',
  age: 30,
  country: 'Colombia',
  dogs: 2
};

author[Symbol.iterator] = buildIterableFor(author, 'name', 'country', 'dogs');

for (const prop of author) {
  console.log(prop);
}

// John
// Colombia
// 2
