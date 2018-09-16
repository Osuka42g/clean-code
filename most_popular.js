function mostPopularName(votes) {
    var votesPerName = votesCounting(votes)
    var mostVotedName = nameWithHigherScore(votesPerName)

    return mostVotedName
}

function votesCounting(votes) {
    var votesPerName = []

    votes.forEach(function (name) {
        if (!votesPerName[name]) {
            votesPerName[name] = 1
        }
        votesPerName[name] = votesPerName[name] + 1
    })

    return votesPerName
}

function nameWithHigherScore(votesPerName) {
    var mostVotedName = ""
    var highestScore = 0
    var names = Object.keys(votesPerName)

    names.forEach(function (name) {
        if (votesPerName[name] > highestScore) {
            highestScore = votesPerName[name]
            mostVotedName = name
        }
    })

    return mostVotedName
}

function printMostPopularName(names) {
    console.log(mostPopularName(names))
}

var names = ["Jessica", "Mauricia", "Jacky", "Jacky", "Heriberta", "Romualdo", "Mauricia", "Heriberta", "Jacky"]

var mostPopular = mostPopularName(names)
console.log(mostPopular)

printMostPopularName(names)