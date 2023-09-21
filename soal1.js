function getResult(score) {
    if (score >= 80 && score <= 100) {
        return "Grade A";
    } else if (score >= 60 && score <= 79) {
        return "Grade B";
    } else if (score >= 40 && score <= 59) {
        return "Grade C";
    } else if (score >= 20 && score <= 39) {
        return "Grade D";
    } else if (score >= 0 && score <= 19) {
        return "Grade E";
    } else {
        return "Nilai tidak valid";
    }
}

getResult("Adrian", 78);
getResult("Rafhi", 80);
getResult("Annisa", 1000);
getResult("Taufik", 21);
getResult("Taufik", -10);