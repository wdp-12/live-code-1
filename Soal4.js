function createBlocks(block, size) {
    // Cek jika size selain 1, 4, 9, atau 16, maka tampilkan "size invalid"
    if (![1, 4, 9, 16].includes(size)) {
        console.log("size invalid");
        return;
    }

    // Cek jika block <= 0, maka tampilkan "block invalid"
    if (block <= 0) {
        console.log("block invalid");
        return;
    }

    // Loop untuk membuat blok-blok
    for (let i = 0; i < block; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < 4; k++) {
                row += "* ";
            }
            row += "\n";
        }
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
console.log(""); // Spasi kosong antara blok
createBlocks(2, 9);
// output
// * * *
// * * *
// * * *
// * * * * * *
// * * * * * *
// * * * * * *
console.log(""); // Spasi kosong antara blok


createBlocks(1, 16);
// output
// * * * *
// * * * *
// * * * *
// * * * *
console.log(""); // Spasi kosong antara blok

createBlocks(1, 13);
// output
// "size invalid"
console.log(""); // Spasi kosong antara blok


createBlocks(0, 4);
// output
// "block invalid"
console.log(""); // Spasi kosong antara blok

createBlocks(-1, 3);
// output
// "size invalid, block invalid"
console.log(""); // Spasi kosong antara blok
