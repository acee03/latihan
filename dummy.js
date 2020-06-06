function capital(str) {
    let split = str.toLowerCase().split(' ');
    let re = /[aieo]/g;
    let x = {
        'a': '4',
        'i': '1',
        'e': '3',
        'o': '0'
    }

    for (var i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase().replace(re, split => x[split]) + split[i].substring(1).replace(re, split => x[split]);
    }

    return split.join(' ');
}

console.log(capital("javascript is fun! hehehe"))