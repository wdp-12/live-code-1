// Pseudcode
// store "result" width any value
// for


function sortingItems(array) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        let nilai = array[i];
        let hasil = nilai[0];
        if (!result[hasil]) {
            result[hasil] = [];
        }
        result[hasil].push(nilai)
    }
    console.log(result);
}

const fruits = ["Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot"];

sortingItems(fruits)
    // Output
    // {
    //     a: [ "Apple", "Appricot", "Avocado" ],
    //     b: [ "Banana" ],
    //     p: [ "Pears", "Pomegranate" ],
    // }

const pokemons = ["Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu"];

sortingItems(pokemons)
    // Output
    // {
    //     n: [ "Nidoran" ],
    //     p: [ "Pidgey", "Pikachu" ],
    //     r: [ "Raichu", "Rattat