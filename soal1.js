function getResult(name, score) {
    if (score >= 80 && score <= 100) {
        return name + " mendapatkan Grade A";
    } else if (score >= 60 && score <= 79) {
        return name + " mendapatkan Grade B";
    } else if (score >= 50 && score <= 59) {
        return name + " mendapatkan Grade C";
    } else if (score >= 20 && score <= 49) {
        return name + " mendapatkan Grade D, belajar lagi nak";
    } else if (score >= 0 && score <= 19) {
        return name + " mendapatkan Grade E, belajar lagi nak";
    } else {
        return "Nilai Tidak Valid";
    }
}

console.log(getResult("Adrian", 78)); // "Adrian mendapatkan Grade B"
console.log(getResult("Rafhi", 80)); // "Rafhi mendapatkan Grade A"
console.log(getResult("Annisa", 1000)); // "Nilai Tidak Valid"
console.log(getResult("Taufik", 21)); // "Taufik mendapatkan Grade D, belajar lagi nak"
console.log(getResult("Taufik", -10)); // "Nilai Tidak Valid"
