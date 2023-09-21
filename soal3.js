function sortingItems(array) {
    // tulis kode disini
    const result = {};
    for (const item of array) {
      const firstLetter = item[0].toLowerCase();
      if (!result[firstLetter]) {
        result[firstLetter] = [];
      }
      result[firstLetter].push(item);
    }
  
    return result;
  }
  
  const fruits = [ "Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot" ];
  
  console.log(sortingItems(fruits));
  // Output:
  // {
  //     a: [ "Apple", "Appricot", "Avocado" ],
  //     b: [ "Banana" ],
  //     p: [ "Pears", "Pomegranate" ],
  // }
  
  const pokemons = [ "Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu" ];
  
  console.log(sortingItems(pokemons));
  // Output:
  // {
  //     n: [ "Nidoran" ],
  //     p: [ "Pidgey", "Pikachu" ],
  //     r: [ "Raichu", "Rattata" ]
  // }
  