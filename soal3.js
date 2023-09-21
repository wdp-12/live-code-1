function sortingItems(array) {
    // tulis kode disini
    result = [];
    fruits.sort();    
    for (let i = 0; i < array; i++) {
        result += array[2];
    }
    console.log(array);
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
//     r: [ "Raichu", "Rattat]