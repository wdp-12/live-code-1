function getResults(score) {
    let nilai = hasil;
    console.log(nilai);
    if (nilai <= 100 && nilai >= 80) {
        console.log(score + " Grade: A");
    } else if (nilai <= 79 && nilai >= 60) {
        console.log(score + " Grade: B");
    } else if (nilai <= 59 && nilai >= 40) {
        console.log(score + " Grade: C");
    } else if (nilai <= 39 && nilai >= 20) {
        console.log(score + " Grade : D, belajar Lagi Nak");
    } else if (nilai <= 19 && nilai >= 0) {
        console.log(score + " Grade : E, belajar lagi Nak");
    } else {
        console.log("Nilai Tidak valid");
    }
    return nilai;
}

getResults("Rozan", hasil = 78);
getResults("Fathin", hasil = 80);
getResults("Angga", hasil = 1000);
getResults("Yanuar", hasil = 21);
getResults("Wawan", hasil = -10);