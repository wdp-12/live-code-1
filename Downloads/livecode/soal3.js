function sortingItems(array) {
    const result = {};

    array.forEach((item) => {
        const firstLetter = item.charAt(0).toLowerCase();
        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }
        result[firstLetter].push(item);
    });

    // Mengurutkan objek berdasarkan kunci (huruf pertama)
    const sortedResult = {};
    Object.keys(result).sort().forEach((key) => {
        sortedResult[key] = result[key];
    });

    return sortedResult;
}

const fruits = ["Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot"];
console.log(sortingItems(fruits));

const pokemons = ["Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu"];
console.log(sortingItems(pokemons));
