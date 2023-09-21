function createBlocks(block, size) {
  let hasil = [];

  if (![1, 4, 9, 16].includes(size)) {
    hasil.push("size invalid");
  }
  if (block <= 0) {
    hasil.push("block invalid");
  }

  if (hasil.length > 0) {
    console.log(hasil.join(", "));
    return;
  }

  let rows;
  if (size == 1) rows = 1;
  else if (size == 4) rows = 2;
  else if (size == 9) rows = 3;
  else if (size == 16) rows = 4;

  for (let b = 0; b < block; b++) {
    for (let i = 1; i <= rows; i++) {
      let line = "";
      for (let j = 0; j < i; j++) {
        line += "* ";
      }
      for (let k = 0; k < i; k++) {
        console.log(line);
      }
    }
  }
}

// Test Case
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
