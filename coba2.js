// __PSEUDOCODE__
// FUNCTION getEvenNumbers(num)
//     DECLARE result AS EMPTY_ARRAY
//     FOR i IN num {
//         IF i % 2 == 0
//             result.PUSH(i)
//     RETURN result

function getEvenNumbers(num) {
    // tulis kode disini
    let result = []
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            result.push(i)
        }
    }
    return result
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