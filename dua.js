function getEvenNumbers(num) {
    const evenNumbers = [];
    for (let i = 2; i <= num; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

console.log(getEvenNumbers(16)); // [2, 4, 6, 8, 10, 12, 14, 16]
console.log(getEvenNumbers(17)); // [2, 4, 6, 8, 10, 12, 14, 16]
console.log(getEvenNumbers(18)); // [2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(getEvenNumbers(1));  // []
