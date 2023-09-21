function getResult(nama, score) {

    if (score > 80){
        console.log(nama + " Grade A");      
    } else if (score > 60) {
        console.log(nama + " Grade : B"); 
    } else if (score > 40) {
        console.log(nama + " Grade : C"); 
    } else if (score > 20) {
        console.log(nama + " Grade : D Belajar Lagi Nak"); 
    } else if (score > 19) {
        console.log(nama + " Grade : E Belajar Lagi Nak"); 
    } else {
        console.log(nama + " Nilai Tidak Valid"); 
    }
return;
}


getResult("Adrian", 70);
getResult("Rafhi", 80);
getResult("Annisa", 100);
getResult("Taufik", 21);
getResult("Taufik", -10);