function createBlocks(block, size) {
    let nilai = "";
    for (let i = 0; i < block; i++) {
        for (let j = 0; j < size; j++) {
            nilai += "*";
        }
        nilai += "\n";
    }
    console.log(nilai);
    return nilai;
}

createBlocks(3, 4);
// // output
// // * *
// // * *
// // * * * *
// // * * * *
// // * * * * * *
// // * * * * * *

createBlocks(2, 9);
// // output
// // * * *
// // * * *
// // * * *
// // * * * * * *
// // * * * * * *
// // * * * * * *

createBlocks(1, 16);
// output
// * * * *
// * * * *
// * * * *
// * * * *

createBlocks(1, 13);
// // output
// // "size invalid"

createBlocks(0, 4);
// // output
// // "block invalid"

createBlocks(-1, 3);
// // output
// // "size invalid, block invalid"