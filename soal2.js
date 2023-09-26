function getEvenNumber(now) {
    let nilai = [];
    for (let i = 2; i <= now; i++) {
        if (i % 2 === 0) {
            nilai[nilai.length] = i;
        }
    }
    return nilai
}
console.log(getEvenNumber(16));

console.log(getEvenNumber(17));

console.log(getEvenNumber(18));

console.log(getEvenNumber(1));