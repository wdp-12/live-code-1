function getEvenNumbers(num) {
    const evenNumbers = [];
  
    for (let i = 2; i <= num; i += 2) {
      evenNumbers.push(i);
    }
  
    return evenNumbers;
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

//PSEUDO CODE//
// buat array evenNumbers
//untuk setiap i dari 2 hingga num dengan langkah 2:
// tambahkan i ke dalam evenNumbers
//kembalikan evenNumbers 