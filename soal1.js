function result(score){
    var score = "";
    if (result >= 80){
        hasil = "A";
    } else if (result < 80){
        hasil = "B";
    } else if (result < 60){
        hasil = "C";
    } else if (result < 40){
        hasil = "D, belajar lagi nak";
    } else if (result < 20){
        hasil = "E, belajar lagi nak";
    }
    document.writeln(hasil)
}
getResult("Adrian", 78);