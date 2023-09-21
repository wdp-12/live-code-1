function getEvenNumbers(num) {
    // tulis kode disini
    let arr = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
        }
    }
    return arr;
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