function sortingItems(array) {
  const items = {}; //utk simpan hasil grup item

  for (const item of array) { //melakukan iterasi melalui setiap item dalam array yang diberikan.

  }
  return items;
  
}

const fruits = [ "Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot" ];
console.log(sortingItems(fruits));
// Output
// {
//     a: [ "Apple", "Appricot", "Avocado" ],
//     b: [ "Banana" ],
//     p: [ "Pears", "Pomegranate" ],
// }

const pokemons = [ "Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu" ];
console.log(sortingItems(pokemons));
// Output
// {
//     n: [ "Nidoran" ],
//     p: [ "Pidgey", "Pikachu" ],
//     r: [ "Raichu", "Rattat"]
//   };