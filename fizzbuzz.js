function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        var temp = ""
        if (i % 3 === 0) {
            temp += "Wize"
        }
        if (i % 5 === 0) {
            temp += "Line"
        }
        console.log(temp ? temp : i)
    }
}

fizzbuzz()