let karyawan = [];

function create(nama, usia, divisi) {
    this.id = karyawan.length + 1;
    this.name = nama;
    this.age = usia;
    this.division = divisi;
}

function addKaryawan(nama, usia, divisi) {
    karyawan.push(new create(nama, usia, divisi));
}

function read(id) {
    let result = [];

    for (var i = 0; i < karyawan.length; i++) {
        if (karyawan[i].id == id) {
            result.push(karyawan[i]);
        }
    }
    return result;
}

function findUserById(id) {
    for (var i = 0; i < karyawan.length; i++) {
        if (karyawan[i].id == id) {
            return i;
        }
    }
}

function update(id, nama, usia, divisi) {
    let userId = findUserById(id);
    karyawan[userId].name = nama;
    karyawan[userId].age = usia;
    karyawan[userId].division = divisi;
}

function hapus(id) {
    delete karyawan[id - 1];
}

addKaryawan('Ivan', 20, 'Frontend');
addKaryawan('Rafi', 21, 'Backend')
console.log(karyawan);
console.log(read(2));
update(2, 'test', 19, 'test');
console.log(karyawan);
hapus(2);
console.log(karyawan);



// prototype:
// id
// name
// usia
// divisi