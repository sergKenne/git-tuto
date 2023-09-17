let p1 = new Promise((resolve, reject) => { resolve("ok") }).then(r => console.log(r))
let p2 = Promise.resolve("yes").then(r => {
  console.log(r);
  return r;
})

console.log(p1);
console.log(p2);
