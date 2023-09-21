function createBlocks(block, size) {
    // jika size selain 1, 4, 9, 16 tampilkan "size invalid"
    // jika block <= 0 tampilkan "block invalid"
    // tulis kode disini
    if (size != 1,4,9,16 && block <=0) {
        console.log("size invalid");
    }else{
        for(let i = 1; i < size;i++){
            let star = "";
            for(let j=1;j<block-i;j++){
                star += " ";
            } 
            for (let size = 0; size < 2*i-1; size++) {
                star += "*";
            }
            // star +="\n";
            console.log(star);
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