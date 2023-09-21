function createBlocks(block, size) {

    let errorMessage = "";
    if (![1, 4, 9, 16].includes(size)) {
      errorMessage += "size invalid\n";
    }
    if (block <= 0) {
      errorMessage += "block invalid\n";
    }
    if (errorMessage) {
      console.log(errorMessage.trim());
      return;
    }
    for (let i = 1; i <= block; i++) {
      for (let j = 0; j < size; j++) {
        console.log("* ".repeat(j + 1));
      }
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
  