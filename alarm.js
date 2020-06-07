function alarm(str) {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let split = str.split(":");

    jamAlarm = split[0];
    menitAlarm = split[1];

    selisihJam = jamAlarm - h;
    selisihMenit = menitAlarm + m - 60;


    if (selisihMenit < 0) {
        selisihJam--;
        return `Alarm set for ${Math.abs(selisihMenit)} minutes from now`
    }

    if (selisihJam > 0) {
        return `Alarm set for ${selisihJam} hours ${selisihMenit} minutes from now`
    }
}

console.log(alarm('16:05'))