function getResult(name, score) {
    if (score >= 0 && score <= 100) {
        let grade = '';

        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else if (score >= 70) {
            grade = 'C';
        } else if (score >= 60) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        if (grade === 'E') {
            return `${name} mendapatkan Grade ${grade}, belajar lagi nak!!`;
        } else {
            return `${name} mendapatkan Grade ${grade}`;
        }
    } else {
        return "Nilai tidak valid";
    }
}

console.log(getResult("Adrian", 78)); // Adrian mendapatkan Grade B
console.log(getResult("Rafhi", 80)); // Rafhi mendapatkan Grade A
console.log(getResult("Annisa", 1880)); // Nilai tidak valid
console.log(getResult("Taufik", 21)); // Taufik mendapatkan Grade D, belajar lagi nak!!
console.log(getResult("Taufik", -18)); // Nilai tidak valid