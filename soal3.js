function sortingItems(array) {
  let result = {};

  for (let i = array.length - 1; i >= 0; i--) {
    let firstLetter = array[i][0];
    if (result[firstLetter] === undefined) {
      result[firstLetter] = [];
    }
    result[firstLetter].push(array[i]);
  }

  return result;
}

const fruits = [
  "Banana",
  "Pomegranate",
  "Apple",
  "Pears",
  "Avocado",
  "Appricot",
];

console.log(sortingItems(fruits));
// Output
// {
//     p: [ "Pomegranate", "Pears" ],
//     b: [ "Banana" ],
//     a: [ "Apple", "Avocado", "Appricot" ]
// }

const pokemons = ["Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu"];

console.log(sortingItems(pokemons));
// Output
// {
//     r: [ "Rattata", "Raichu" ],
//     p: [ "Pikachu", "Pidgey" ],
//     n: [ "Nidoran" ]
// }
