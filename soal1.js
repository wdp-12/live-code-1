function getResult(name, score) {
    if (score >= 80 && score <= 100) {
        console.log(name, "mendapatkan Grade A");
    } else if (score >= 60 && score <= 79) {
        console.log(name, "mendapatkan Grade B");
    } else if (score >= 40 && score <= 59) {
        console.log(name, "mendapatkan Grade C");
    } else if (score >= 20 && score <= 39) {
        console.log(name, "mendapatkan Grade D");
    } else if (score >= 0 && score <= 19) {
        console.log(name, "mendapatkan Grade E");
    } else {
        console.log(name, "Nilai tidak valid");
    }
}

getResult("Adrian", 78);
getResult("Rafhi", 80);
getResult("Annisa", 1000);
getResult("Taufik", 21);
getResult("Taufik", -10);