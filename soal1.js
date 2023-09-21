function getResult(name, score) {
    if (score >= 80 && score <= 100) {
      console.log(`${name} mendapatkan Grade A`);
    } else if (score >= 60 && score < 80) {
      console.log(`${name} mendapatkan Grade B`);
    } else if (score >= 40 && score < 60) {
      console.log(`${name} mendapatkan Grade C`);
    } else if (score >= 20 && score < 40) {
      console.log(`${name} mendapatkan Grade D, belajar lagi nak`);
    } else if (score >= 0 && score < 20) {
      console.log(`${name} mendapatkan Grade E, belajar lagi nak`);
    } else {
      console.log(`Nilai tidak valid`);
    }
  }

getResult('Adrian', 78); // Adrian mendapatkan Grade B
getResult('Rafhi', 80); // Rafhi mendapatkan Grade A
getResult('Annisa', 1000); // Nilai tidak valid
getResult('Taufik', 21); // Taufik mendapatkan Grade D, belajar lagi nak
getResult('Taufik', -10); // Nilai tidak valid