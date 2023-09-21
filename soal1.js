function getResult(score) {
  // Nilai 100 - 80" "Grade A"
  // Nilai 79 - 60" "Grade B"
  // Nilai 59 - 40" "Grade C"
  // Nilai 39 - 20" "Grade D, belajar lagi nak"
  // Nilai 19 - 0" "Grade E, belajar lagi nak"
  // Jika nilai beradadiluar rentang 0 - 100, tampilkan pesan "Nilai tidak valid".

  //tulis kode disini
  if (score <= 80 && score >= 100) {
    return "grade A";
  } else if (score <= 79 && score >= 60) {
    return "grade B";
  } else if (score <= 59 && score >= 50) {
    return "grade C";
  }else if (score <= 39 && score >= 40){
    return "grade D,belajar lagi nak";
    }else if (score <= 19 && score >= 0){
        return "grade E,belajar lagi nak";
    }
}

getResult("Adrian", 78);
getResult("Rafhi", 80);
getResult("Annisa", 1000);
getResult("Taufik", 21);
getResult("Hamzah", -10);
