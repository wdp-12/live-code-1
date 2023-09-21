function createBlocks(block, size) {
  // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
  if (![1, 4, 9, 16].includes(size)) {
    console.log("size invalid");
    return;
  }
  // jika block <= 0 tampilkan "block invalid"
  if (block <= 0) {
    console.log("block invalid");
    return;
  }
  // tulis kode disini
    for (let i = 0; i < size; i++) {
    let row = "";

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