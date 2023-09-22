function createBlocks(block, size) {
    let result = "";

    if (block <= 0) {
        result = "block invalid";
    } else if (![1, 4, 9, 16].indexOf(size) >= 0) {
        result = "size invalid";
    } else {
        for (let i = 0; i < block; i++) {
            for (let j = 0; j < size; j++) {
                result += "* ";
            }
            result += "\n";
        }
    }

    return result;
}

console.log(createBlocks(3, 4));
console.log(createBlocks(2, 9));
console.log(createBlocks(1, 16));
console.log(createBlocks(1, 13));
console.log(createBlocks(0, 4));
console.log(createBlocks(-1, 3));
