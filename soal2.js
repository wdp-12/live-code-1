function getEvenNumbers(num) {
  // tulis kode disini
  let res = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      res.push(i);
    }
  }
  return res;
}

console.log(getEvenNumbers(16));
// Output
// [ 2, 4, 6, 8, 10, 12, 14, 16 ];

console.log(getEvenNumbers(17));
// Output
// [ 2, 4, 6, 8, 10, 12, 14, 16 ];

console.log(getEvenNumbers(18));
// Output
// [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ];

console.log(getEvenNumbers(1));
// Output
// [];
