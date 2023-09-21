function sortingItems(array) {
  
    const groupedItems = {};

    for (const item of array) {

        const firstLetter = item.charAt(0).toLowerCase();

        if (!groupedItems[firstLetter]) {
  
            groupedItems[firstLetter] = [item];
        } else {
           
            groupedItems[firstLetter].push(item);
        }
    }

    
    return groupedItems;
}

const fruits = [ "Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot" ];
const resultFruits = sortingItems(fruits);
console.log(resultFruits);

const pokemons = [ "Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu" ];
const resultPokemons = sortingItems(pokemons);
console.log(resultPokemons);
