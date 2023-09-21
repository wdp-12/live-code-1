function sortingItems(array) {
    const result = {};

    while (array.length > 0) {
        const item = array.pop();
        const hurufDepan = item[0].toLowerCase();

        if (!result[hurufDepan]) {
            result[hurufDepan] = [];
        }

        result[hurufDepan].push(item);
    }

    // Mengurutkan berdasarkan urutan abjad
    for (const key in result) {
        result[key].sort();
    }
    console.log(result);
    return result;
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