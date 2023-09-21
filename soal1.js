function getResult(nama, score){
    if (score > 80){
        return nama + " mendapatkan Grade A";
    } else if (score > 60){
        return nama + " mendapatkan Grade B";
    } else if (score > 40){
        return nama + " mendapatkan Grade C";
    } else if (score > 20){
        return nama + " mendapatkan Grade D, belajar lagi nak";
    } else if (score > 0){
        return nama + " mendapatkan Grade E, belajar lagi nak";
    } else {
        return "Nilai tidak valid";
    }
}

console.log(getResult("Adrian", 78));
console.log(getResult("Rafhi", 80));
console.log(getResult("Annisa", 1000));
console.log(getResult("Taufik", 21));
console.log(getResult("Taufik", -10));
