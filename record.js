function record(arr) {
    let low = 0;
    let high = 0;
    let temph = arr[0];
    let templ = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > temph) {
            temph = arr[i];
            high++;
        }
        if (arr[i] < templ) {
            templ = arr[i];
            low++
        }
    }

    return `Rekor Terendah = ${low}\nRekor Tertinggi ${high}`
}

console.log(record([50, 30, 65, 20, 75, 80, 60, 40, 50, 85, 15, 2, 100]));

// output:
// rekor terendah: 3
// rekor tertinggi: 4