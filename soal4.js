function createBlocks(block, size) {
  // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
  if (size != 1 && size != 4 && size != 9 && size != 16) {
    console.log("size invalid");
  }

  // jika block <= 0 tampilkan "block invalid"
  if (block <= 0) {
    console.log("block invalid");
  }

  // tulis kode disini
  for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i * 2; j++) {
      row += "* ";
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
