



function* generator() {
  yield 'D';
  yield 'I';
  yield 'M';
  yield 'A';
};
const str = generator();

//console.log(str.next().value);

/*

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());


*/

function* count(n){
  for(let i = 0; i < n; i++){
    yield i;
  }
}

for (let k of count(10)){
  console.log(k);
}

const counter = count(9);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());