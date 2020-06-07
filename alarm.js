function alarm(str) {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let split = str.split(":");

    let dh = Math.abs(h - split[0]);
    let dm = Math.abs(m - split[1]);

    if (dh == 0) {
        return `Alarm set for ${dm} minutes from now`
    } else {
        return `Alarm set for ${dh} hours and ${dm} minutes from now`
    }

}

console.log(alarm('11:45'))
console.log(alarm('13:30'))