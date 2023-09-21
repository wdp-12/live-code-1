// 1. buat function bernama getResult dengan parameter name dan score
// 2. buat kondisi dengan if else
// 3. jika score lebih besar sama dengan 80 dan score lebih kecil sama dengan 100 maka tampilkan "name mendapatkan nilai A"
// 4. jika score lebih besar sama dengan 60 dan score lebih kecil sama dengan 79 maka tampilkan "name mendapatkan nilai B"
// 5. jika score lebih besar sama dengan 40 dan score lebih kecil sama dengan 59 maka tampilkan "name mendapatkan nilai C"
// 6. jika score lebih besar sama dengan 20 dan score lebih kecil sama dengan 39 maka tampilkan "name mendapatkan nilai D, belajar lagi nak"
// 7. jika score lebih besar sama dengan 0 dan score lebih kecil sama dengan 19 maka tampilkan "name mendapatkan nilai E, belajar lagi nak"
// 7. diluar nilai yang sudah di definisikan pada if statement maka bernilai "Nilai tidak valid"

function getResult(name, score) {
  if (score >= 80 && score <= 100) {
    console.log(`${name} mendapatkan nilai A`);
  } else if (score >= 60 && score <= 79) {
    console.log(`${name} mendapatkan nilai B`);
  } else if (score >= 40 && score <= 59) {
    console.log(`${name} mendapatkan nilai C`);
  } else if (score >= 20 && score <= 39) {
    console.log(`${name} mendapatkan nilai D, belajar lagi nak`);
  } else if (score >= 0 && score <= 19) {
    console.log(`${name} mendapatkan nilai E, belajar lagi nak`);
  } else {
    console.log(`Nilai tidak valid`);
  }
}

getResult("Adrian", 78); // Adrian mendapatkan nilai B
getResult("Rafhi", 80); // Rafi mendapatkan nilai A
getResult("Anisa", 1000); // Nilai tidak valid
getResult("Taufik", 21); // Taufik mendapatkan nilai D, belajar lagi nak
getResult("Taufik", -10); // Nilai tidak valid
