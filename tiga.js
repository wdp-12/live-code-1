function sortingItems(array) {
    const result = {};

    function LowerCase(char) {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < uppercaseChars.length; i++) {
            if (char === uppercaseChars[i]) {
                return lowercaseChars[i];
            }
        }

        return char;
    }

    for (const item of array) {
        const firstLetter = LowerCase(item[0]);

        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }

        result[firstLetter].push(item);
    }

    return result;
}

const fruits = ["Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot"];
const pokemons = ["Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu"];

console.log(sortingItems(fruits));
console.log(sortingItems(pokemons));
