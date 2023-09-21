function getResult(nama, store) {
    let grade;

    if (store >= 80 && store <= 100) {
        grade = "A";
    } else if (store >= 60 && store <= 79) {
        grade = "B";
    } else if (store >= 40 && store <= 59) {
        grade = "C";
    } else if (store >= 20 && store <= 39) {
        grade = "D, belajar lagi nak";
    } else {
        grade = "E";
    }

    console.log(`${nama} mendapatkan grade ${grade}`);
}

getResult("Ardian", 78); // "Ardian mendapatkan grade B"
getResult("Rafhi", 80); // "Rafhi mendapatkan grade A"
getResult("Taufik", 21); // "Taufik mendapatkan Grade D, belajar lagi nak"
