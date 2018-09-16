function mostPopularName(votes) {
    var total = []
    votes.forEach(function(e) {
        if (typeof(total[e]) !== 'undefined') {
            total[e] = total[e] + 1
        } else {
            total[e] = 1
        }
    })

    var highestTotal = 0
    var highestName
    
    var names = Object.keys(total)
    
    var highest = 0
    names.forEach(function(key) {
        if (total[key] > highest) {
            highest = total[key]
            highestName = key
        }
    })

    return highestName
}

function printMostPopularName(names) {
    console.log(mostPopularName(names))
}

var names = ["Jessica", "Mauricia", "Jacky", "Jacky", 'Heriberta', "Romualdo", "Mauricia", "Heriberta", "Jacky"]

var mostPopular = mostPopularName(names)
console.log(mostPopular)
printMostPopularName(names)