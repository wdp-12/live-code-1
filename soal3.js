function sortingItems(array) {
    const sortedItems = {};

    for (const item of array) {
        const firstLetter = item[0].toLowerCase(); // Mengambil huruf pertama dan mengubahnya menjadi huruf kecil
        if (!sortedItems[firstLetter]) {
            sortedItems[firstLetter] = [];
        }
        sortedItems[firstLetter].push(item);
    }

    return sortedItems;
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
//     r: [ "Raichu", "Rattata" ],
// }
