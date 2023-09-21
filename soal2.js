function getEvenNumbers(nilai) {
    const tempat = []
    if (nilai % 2 == 0) {
        for (let i = 0; i < nilai.length; i++ ) {
            nilai.push();
            console.log(nilai);
        }
        
    }
//    return tempat;
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