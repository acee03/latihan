function jam(str1, str2) {
    var harga = 0;
    var a = str1.split(":");
    var b = str2.split(":");
    var x = b[0] - a[0];

    if (b[0] - a[0] == x) {
        harga = 5000 + (4000 * x);
    } else {
        harga = 5000;
    }

    return `Biaya Parkir anda sebesar Rp ${harga}`;
}

console.log(jam('11:30', '14:10'));