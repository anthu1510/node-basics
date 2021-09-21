const users = ['welcome', 'hello', 'hi'];

const rs = users.findIndex(v => v === 'hello');

const fill = users.filter(v => v === 'hi');
console.log(rs);
console.log(fill);

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// users.forEach(item => {
//     console.log(item);
//     console.log(item);
//     console.log(item);
//     console.log(item);
// });

// users.map(v =>  console.log(v));

// for (const i of users) {
//   console.log(i);
// }

// users.forEach(function(v){
//     console.log(v)

// function test() {
//     console.log('test');
// }

// const test = (a) => {
//     console.log(a);
// }

// test(123);