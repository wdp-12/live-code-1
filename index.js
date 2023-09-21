// // function getResult(score){
// //     let grade;
// //     if( score < 100 || score > 80) {
// //         grade = 'A'
// //     }
// //     return grade;
// // }

// // function getResult(score){
// //     let grade;
// //     if( score < 79 || score > 60) {
// //         grade = 'B'
// //     }
// //     return grade;
// // }

// // function getResult(score){
// //     let grade;
// //     if( score < 59 || score > 40) {
// //         grade = 'C'
// //     }
// //     return grade;
// // }

// // function getResult(score){
// //     let grade;
// //     if( score < 39 || score > 20) {
// //         grade = 'D'
// //     }
// //     return grade;
// // }

// // function getResult(score){
// //     let grade;
// //     if( score < 19 || score > 0) {
// //         grade = 'E'
// //     }
// //     return grade;
// // }

// function getEvenNumbers(num) {
//     const even_numbers = []
//     for (let i = 1; i <= num; i++){
//         if i % 2 == 0;
//     }
   

//     return even_numbers

//     // tulis kode disini
// }

// console.log(getEvenNumbers(16));
// // Output
// // [ 2, 4, 6, 8, 10, 12, 14, 16 ];

// console.log(getEvenNumbers(17));
// // Output
// // [ 2, 4, 6, 8, 10, 12, 14, 16 ];

// console.log(getEvenNumbers(18));
// // Output
// // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ];

// console.log(getEvenNumbers(1));
// // Output
// // [];

function sortingItems(array) {
    const result = {};

    array.forEach(item => {
        const Fruitspokemons = item.charAt(0).
        toLowerCase(0);

        if(!result[Fruitspokemons]) {
            result[Fruitspokemons] = [];
        }
        result[Fruitspokemons].push(item);
    });
    return result;
}

const fruits = [ "Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot" ];
const pokemons = [ "Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu" ];

const sortedFruits = sortingItems(fruits);
console.log(sortedFruits);

const sortedPokemons = sortingItems(pokemons);
console.log(sortedPokemons);