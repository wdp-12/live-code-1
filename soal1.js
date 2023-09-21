function getResult(score) {
    if (score >= 80 && score <= 100) {
        return "mendapatkan Grade A";
    } else if (score >= 60 && score <= 79) {
        return "mendapatkan Grade B";
    } else if (score >= 40 && score <= 59) {
        return "mendapatkan Grade C";
    } else if (score >= 20 && score <= 39) {
        return "mendapatkan Grade D";
    } else if (score >= 0 && score <= 19) {
        return "mendapatkan Grade E";
    } else {
        return "Nilai tidak valid";
    }
}

console.log("Adrian", getResult(78));
console.log("Rafhi", getResult(80));
console.log("Annisa", getResult(1000));
console.log("Taufik", getResult(21));
console.log("Taufik", getResult(-10));