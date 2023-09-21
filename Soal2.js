function getEvenNumbers(num) {
    const bilanganGenap = [];
    let bilanganSaatIni = 2;

    while (bilanganSaatIni <= num) {
        bilanganGenap.push(bilanganSaatIni);
        bilanganSaatIni += 2;
    }

    return bilanganGenap;
}

console.log(getEvenNumbers(16));
// Output: [ 2, 4, 6, 8, 10, 12, 14, 16 ]

console.log(getEvenNumbers(17));
// Output: [ 2, 4, 6, 8, 10, 12, 14, 16 ]

console.log(getEvenNumbers(18));
// Output: [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

console.log(getEvenNumbers(1));
// Output: []
