function validIP(ip) {
    if (!ip || typeof(ip) !== "string") {
        return false;
    }

    var split = ip.split('.')
    if (split.length === 4) {
        // console.log(split)
        return split.every(el => el > -1 && el <= 255)
    } else {
        return false;
    }

    return true;
}


var ip = "127.0.0";

if(validIP(ip)){
    console.log(ip + " is valid");
} else {
    console.log(ip + " is not valid");
}