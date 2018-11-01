const names = ["Jessica", "Mauricia", "Jacky", "Jacky", "Heriberta", "Romualdo", "Mauricia", "Heriberta", "Jacky"];

const getOcurrenceMap = (values) => {
    const ocurrenceMap = {};

    values.forEach(value => {
        ocurrenceMap[value] = ocurrenceMap[value] ? ocurrenceMap[value] + 1 : 1;
    });

    return ocurrenceMap;
};

const mostPopularName = (namesArray) => {
    const nameOcurrenceMap = getOcurrenceMap(namesArray);

    let highestName = Object.keys(nameOcurrenceMap)[0];

    for (const name in nameOcurrenceMap) {
        highestName = nameOcurrenceMap[name] > nameOcurrenceMap[highestName] ? name : highestName;
    }

    return highestName;
};

console.log(mostPopularName(names));