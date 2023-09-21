function getresult(nama, nilai) {
    if (nilai >= 80 && nilai <= 100) {
        console.log(nama + " mendapatkan grade A");
    } else if (nilai >= 60 && nilai <= 79) {
        console.log(nama + " mendapatkan grade B");
    } else if (nilai >= 40 && nilai <= 59) {
        console.log(nama + " mendapatkan grade C");
    } else if (nilai >= 20 && nilai <= 39) {
        console.log(nama + " mendapatkan grade D, belajar lagi nak");
    } else if (nilai >= 0 && nilai <= 19) {
        console.log(nama + " mendapatkan grade E, belajar lagi nak");
    } else {
        console.log("Nilai tidak valid");
    }
}

getresult("Adrian", 70); // Output: "Adrian mendapatkan grade B"
getresult("Rafhi", 80); // Output: "Rafhi mendapatkan grade A"
getresult("Annisa", 1000); // Output: "Nilai Tidak Valid"
getresult("Taufik", 21); // Output: "Taufik mendapatkan grade D, belajar lagi nak"
getresult("Taufik", -10); // Output: "Nilai tidak valid"
