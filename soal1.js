function getResult(score) {
    // const nilai = 0
    const kata = "Mendapatkan"
    if (score >= 100 ) {
        console.log("nilai tidak valid");
    }else if (score >=60 && score <80) {
        console.log("Grade B");
    }else if (score >= 40 && score <60) {
        console.log("Grade C");
    }else if (score >= 20 && score <=40) {
        console.log("Grade D, belajar lagi nak");
    }else if (score <=20) {
        console.log("Grade E, belajar lagi nak");
    }else{
        console.log("Grade A");
    }
    return score;
}
getResult("Adrian",78);
getResult("Rafhi",80);
getResult("Annisa",1000);
getResult("Taufik",21);
getResult("Taufik",10);