let string = [
    'Hello',
    'Today We will practice about',
    'Javascript Fundamental',
    'Have fun! \n'
]

function loop(string) {
    setInterval(function () {
        for (var i = 0; i < string.length; i++) {
            (function (i) {
                setTimeout(function () {
                    console.log(string[i]);
                }, 1000 * i);
            })(i);
        };
    }, 4000)
}

loop(string)