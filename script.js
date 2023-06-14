



function* generator() {
  yield 'D';
  yield 'I';
  yield 'M';
  yield 'A';
};
const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
