function getResult(name, score) {

    if (score >= 0 && score <= 100) {

        let grade;
        if (score >= 80 && score <= 100) {
            grade = "A";
        } else if (score >= 68 && score <= 79) {
            grade = "B";
        } else if (score >= 48 && score <= 59) {
            grade = "C";
        } else if (score >= 20 && score <= 39) {
            grade = "D, Belajar lagi nak!!!";
        } else {
            grade = "E, Belajar lagi nak!!!";
        }
        

        return name + " mendapatkan Grade " + grade;
    } else {

        return "Nilai tidak valid";
    }
}

console.log(getResult("Adrian", 78)); // Adrian mendapatkan Grade B
console.log(getResult("Rafhi", 80)); // Rafhi mendapatkan Grade A
console.log(getResult("Annisa", 1000)); // Nilai tidak valid
console.log(getResult("Taufik", 21)); // Taufik mendapatkan Grade D, Belajar lagi nak!!!
console.log(getResult("Taufik", -18)); // Nilai tidak valid

