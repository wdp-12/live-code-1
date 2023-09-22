function getResult(score) {
    // Nilai 100 - 80: "Grade A"
    // Nilai 79 - 60: "Grade B"
    // Nilai 59 - 40: "Grade C"
    // Nilai 39 - 20: "Grade D, belajar lagi nak"
    // Nilai 19 - 0: "Grade E, belajar lagi nak"
    // Jika nilai berada di luar rentang 0 - 100, tampilkan pesan "Nilai tidak valid".

    // tulis kode disini


}


getResult("Adrian", 78); // "Adrian mendapatkan Grade B"
getResult("Rafhi", 80); // "Rafhi mendapatkan Grade A"
getResult("Annisa", 1000); // "Nilai tidak valid"
getResult("Taufik", 21); // "Taufik mendapatkan Grade D, belajar lagi nak"
getResult("Taufik", -10); // "Nilai tidak valid"