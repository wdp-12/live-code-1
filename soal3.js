function sortingItems(array) {
  // tulis kode disini
  let res = {};

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let key = item[0];

    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(item);
  }

  //sort
let resSort = {};
let 

  return console.log(res);
}

const fruits = ["Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot"];

sortingItems(fruits);
// Output
// {
//     a: [ "Apple", "Appricot", "Avocado" ],
//     b: [ "Banana" ],
//     p: [ "Pears", "Pomegranate" ],
// }

const pokemons = ["Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu"];

sortingItems(pokemons);
// Output
// {
//     n: [ "Nidoran" ],
//     p: [ "Pidgey", "Pikachu" ],
//     r: [ "Raichu", "Rattata" ],
// }
