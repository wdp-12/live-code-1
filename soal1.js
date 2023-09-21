function getResults(score) {
    let nilai = 80;

    if (nilai <= 100 && nilai >= 80) {
        console.log("Grade: A");
    } else if (nilai <= 100 && nilai >= 80) {
        console.log("Grade: B");
    } else if (nilai <= 79 && nilai >= 60) {
        console.log("Grade: C");
    } else if (nilai <= 59 && nilai >= 40) {
        console.log("Grade :D, belajar Lagi Nak");
    } else if (nilai <= 10 && nilai >= 0) {
        console.log("Grade :E, belajar lagi Nak");
    } else {
        console.log("Nilai Tidak valid");
    }
    return nilai;

}

getResults("Rozan", 78);
getResults("Fathin", 80);
getResults("Angga", 1000);
getResults("Yanuar", 21);
getResults("Wawan", 10);