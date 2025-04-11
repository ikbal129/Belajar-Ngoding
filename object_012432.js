const myObject = {
    nama : 'ikbal',
    kelas : 10,
    hobi : ['ngoding', 'gambar', 'makan'],
    detail : {
        tinggi : 170,
        berat : 47
    }
};

console.log (myObject)
console.log (myObject.nama)
console.log (myObject.hobi[2])
console.log (myObject.kelas)
console.log (myObject.detail.tinggi)

const detail = myObject.detail

console.log (detail.berat)
console.log ('')

console.log (myObject['detail']['tinggi'])

let objAngka = {};
for (let i = 0; i <= 3; i++) {
    objAngka[i] = i
}

console.log (objAngka)
for (let i = 0; i <= 3; i++) {
    console.log (objAngka[i])
}

console('0')
for (const key in myObject) {
    console.log (`${key}; ${myObject[key]}`)
}
