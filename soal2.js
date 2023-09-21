//pseudo code
// 1. make function getEvenNumbers with parameter num
// 2. make variable result with empty array to store the result
// 3. make loop with for to check the number from 1 to num
// 4. make conditon with "if" to check the number with modulo if the result is 0 then push the number to result
// 5. return the result
// 6. call the function with the number as the parameter
// done, sir :)

function getEvenNumbers(num) {
  // tulis kode disini
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  return result;
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
