//pseudocode:
// Fungsi getEvenNumbers(num)
//     Buat sebuah array kosong evenNumbers
//     Set i sama dengan 2

//     Selama i kurang dari atau sama dengan num
//         Tambahkan i ke dalam array evenNumbers
//         Tambahkan i dengan 2

//     Kembalikan evenNumbers
// End Fungsi

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