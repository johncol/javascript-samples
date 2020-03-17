const author = {
  name: 'John',
  age: 30,
  country: 'Colombia',
  dogs: 2
};

author[Symbol.iterator] = function() {
  const fields = [author.name, author.dogs];
  let index = 0;
  return {
    next: () => {
      const done = index >= fields.length;
      return {
        done,
        value: done ? undefined : fields[index++]
      };
    }
  };
};

for (const prop of author) {
  console.log(prop);
}
// John
// 2
