function getResult(nama, score) {
  let grade; 
  
  if(score <= 100 && score >= 80 ){
    grade ="A";
  } else if(score <= 79 && score >= 60 ){
    grade = "B";
  } else if(score <= 59 && score >= 40 ){
    grade = "C";
  }else if(score <= 39 && score >= 20 ){
    grade = "D, Belajar lagi nak";
  }else if(score <= 19 && score >= 0 ){
    grade = "E, Belajar lagi nak";
  }else{
    grade = "Nilai tidak valid";
  }

  console.log(nama + " mendapatkan Grade " + grade);
}

getResult("Adrian", 78);
getResult("Rafhi", 80);
getResult("Annisa", 1000);
getResult("Taufik", 21);
getResult("Taufik", 10); //aa