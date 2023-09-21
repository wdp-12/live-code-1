function sortingItems(array) {
    const gruptitem = {}; 

    for (const item of array) { 
        const hurufawal = item.charAt(0).toLowerCase(); 

        if (!gruptitem[hurufawal]) { 
            gruptitem[hurufawal] = [item];
        } else { 
            gruptitem[hurufawal].push(item);
        }
    }

    return gruptitem; 
}

const fruits = ["Banana", "Pomegranate", "Apple", "Pears", "Avocado", "Appricot"];
const resultFruits = sortingItems(fruits);
// Output
// {
//     a: [ "Apple", "Appricot", "Avocado" ],
//     b: [ "Banana" ],
//     p: [ "Pears", "Pomegranate" ],
// }
console.log(resultFruits);

const pokemons = ["Rattata", "Pikachu", "Pidgey", "Nidoran", "Raichu"];
const resultPokemons = sortingItems(pokemons);
// Output
// {
//     n: [ "Nidoran" ],
//     p: [ "Pidgey", "Pikachu" ],
//     r: [ "Raichu", "Rattat]
//}
console.log(resultPokemons);
