function createBlocks(block, size) {
    // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
    // jika block <= 0 tampilkan "block invalid"
    // tulis kode disini

    var string = '';  
    if (![1, 4, 9, 16].includes(size)) {
        console.log(size + ' = size invalid');
    }

    if (block <= 0) {
        console.log(block + ' = block invalid');
    }

    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < block; j++) {
                string += '* ';
            }
            string += '\n';
        }
    return string;

}

console.log(createBlocks(3, 4));
// output
// * *
// * *
// * * * *
// * * * *
// * * * * * *
// * * * * * *

console.log(createBlocks(2, 9));
// output
// * * *
// * * *
// * * *
// * * * * * *
// * * * * * *
// * * * * * *

console.log(createBlocks(1, 16));
// output
// * * * *
// * * * *
// * * * *
// * * * *

console.log(createBlocks(1, 13));
// output
// "size invalid"

console.log(createBlocks(0, 4));
// output
// "block invalid"

console.log(createBlocks(-1, 3));
// output
// "size invalid, block invalid"