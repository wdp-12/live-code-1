function getResult(name, score) {
    let grade = ''
    if (score >= 80 && score <= 100) {
        grade+= 'A'
    } else if (score >= 60 && score <= 79) {
        grade+= 'B'
    } else if (score >= 40 && score <= 59) {
        grade+= 'C'
    } else if (score >= 20 && score <= 39) {
        grade+= 'D, belajar lagi nak!!'
    } else if (score >= 0 && score <= 19) {
        grade+= 'E, belajar lagi nak!!'
    } else {
        console.log('Nilai tydack valdi');
        return
    }

    console.log(`${name} mendapatkan Grade ${grade}`);
}

getResult("Adrian", 78)
getResult("Rafhi", 80)
getResult("Annisa", 1880)
getResult("Taufik", 21)
getResult("Taufik", -18)