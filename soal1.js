//ok ler
function getResult(name, score) {
  let grade;

  if (score >= 80 && score <= 100) {
    grade = "Grade A";
  } else if (score >= 60 && score <= 79) {
    grade = "Grade B";
  } else if (score >= 40 && score <= 59) {
    grade = "Grade C";
  } else if (score >= 20 && score <= 39) {
    grade = "Grade D, belajar lagi nak";
  } else if (score >= 0 && score <= 19) {
    grade = "Grade E, belajar lagi nak";
  } else {
    grade = "Nilai tidak valid";
  }

  return name + " mendapatkan " + grade;
}

console.log(getResult("Adrian", 78));
console.log(getResult("Rafhi", 80));
console.log(getResult("Rafhi", 80));
console.log(getResult("Annisa", 1000));
console.log(getResult("Taufik", 21));
console.log(getResult("Taufik", -10));
