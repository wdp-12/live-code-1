function createBlocks(block, size) {
    let result = "";

    if (![1, 4, 9, 16].includes(size)) {
        result = "size invalid";
    }

    if (block <= 0) {
        if (result) {
            result += ", block invalid";
        } else {
            result = "block invalid";
        }
    }

    if (result) {
        console.log(result);
        return;
    }

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= block; j++) {
            for (let k = 1; k <= size; k++) {
                result += "* ";
            }
            result += "\n";
        }
    }

    console.log(result);
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
