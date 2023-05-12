function expect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('Success');
      } else {
        console.error(`Value is ${value}, but explactation is ${exp}`);
      }
    }
  }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = { sum, nativeNull };

/* expect(sum(41, 1)).toBe(42);
expect(sum(41, 54)).toBe(42); */