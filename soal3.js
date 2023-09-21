function sortingItems(array) {
    const result = {};

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const firstLetter = item[0].toLowerCase();

        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }

        while (j >= 0 && item < letterArray[j]) {
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
//     r: [ "Raichu", "Rattat ]
// }

console.log(sortingItems(fruits));
console.log(sortingItems(pokemons));