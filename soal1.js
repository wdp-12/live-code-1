function getResult(name, score) {
    let nilai = ""
    if (nilai >= 80 && nilai <= 100) {
        nilai += "Grade A"
    } else if (nilai >= 60 && nilai <= 79) {
        nilai += "Grade B"
    } else if (nilai >= 40 && nilai <= 59) {
        nilai += "Grade C"
    } else if (nilai >= 20 && nilai <= 39) {
        nilai += "Grade D, Belajar lagi nak"
    } else if (nilai >= 0 && nilai <= 19) {
        nilai += "Grade E,  Belajar lagi nak"
    } else {
        nilai += "Nilai Tidak Valid"
    } 
    console.log(getResult);
    return;
}

getResult("Adrian", 78);
getResult("Rafhi", 80);
getResult("Annisa", 100);
getResult("Taufik", 21);
getResult("Taufik", -10);