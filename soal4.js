function createBlocks(block, size) {
    // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
    // jika block <= 0 tampilkan "block invalid"
    // tulis kode disini
    if (block <= 0) {
        if (size !== 1 && size !== 4 && size !== 9 && size !== 16) {
          return "size invalid, block invalid";
        } else {
          return "block invalid";
        }
      }
    
      if (size !== 1 && size !== 4 && size !== 9 && size !== 16) {
        return "size invalid";
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


console.log(createBlocks(3, 4));
console.log(createBlocks(2, 9));
console.log(createBlocks(1, 16));
console.log(createBlocks(1, 13));
console.log(createBlocks(0, 4));
console.log(createBlocks(-1, 3));