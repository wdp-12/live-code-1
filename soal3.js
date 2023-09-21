function sortingItems(array) {
    // tulis kode disini
    const fruits = {};

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const sorting = item[0]; // men-sorting dari huruf awal fruits (index 0)

        if (!fruits[sorting]) {
            fruits[sorting] = [];
        }

        fruits[sorting].push(item);
    }

    return fruits;

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
//     r: [ "Raichu", "Rattat