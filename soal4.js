function createBlocks(block, size) {
    // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
    // jika block <= 0 tampilkan "block invalid"
    // tulis kode disini

    if (![1, 4, 9, 16].includes(size)) {
        console.log("size invalid");
        return;
    }

    if (block <= 0) {
        console.log("block invalid");
        return;
    }

    for (let i = 0; i < size; i++) {
        let row = "* ";
        console.log(row);
    }
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