function printWizeLineFizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        console.log(textForValue(i))
    }
}

function textForValue(n) {
    if (n % 15 === 0) return "WizeLine"
    if (n % 5 === 0) return "Wize"
    if (n % 3 === 0) return "Line"
    return n
}

printWizeLineFizzBuzz()