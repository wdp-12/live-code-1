function createBlocks(block, size) {
    // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
    // jika block <= 0 tampilkan "block invalid"
    // tulis kode disini

    let result = '';

    if (![1, 4, 9, 16].includes(size)) {
        return "size invalid";
    }

    if (block <= 0) {
        return "block invalid";
    }

    // Langkah 3: Buat pola blok bintang
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= block; j++) {
            for (let k = 1; k <= i; k++) {
                result += '* ';
            }
            result += '\n';
        }
    }

    console.log(result);
    return result;
}


createBlocks(3, 4);
// output
// * *
// * *
// * * * *
// * * * *
// * * * * * *
// * * * * * *

createBlocks(2, 9);
// output
// * * *
// * * *
// * * *
// * * * * * *
// * * * * * *
// * * * * * *

createBlocks(1, 16);
// output
// * * * *
// * * * *
// * * * *
// * * * *

createBlocks(1, 13);
// output
// "size invalid"

createBlocks(0, 4);
// output
// "block invalid"

createBlocks(-1, 3);
// output
// "size invalid, block invalid"