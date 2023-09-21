function sortingItems(array) {
    // tulis kode disini
    const result = [];

    for (const item of array) {
      const firstLetter = item[0];
      if (result[firstLetter]) {
        result[firstLetter].push(item);
      } else {
        result[firstLetter] = [item];
      }
    }
  
    return result;
  }

const fruits = [ "Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot" ];

sortingItems(fruits) 
// Output
// {
//     a: [ "Apple", "Appricot", "Avocado" ],
//     b: [ "Banana" ],
//     p: [ "Pears", "Pomegranate" ],
// }

const pokemons = [ "Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu" ];

sortingItems(pokemons) 
// Output
// {
//     n: [ "Nidoran" ],
//     p: [ "Pidgey", "Pikachu" ],
//     r: [ "Raichu", "Rattat

console.log(sortingItems(fruits));
console.log(sortingItems(pokemons));