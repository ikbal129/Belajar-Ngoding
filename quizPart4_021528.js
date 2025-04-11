//soal 1
//buat function
function shoutOut() {
    let hasil = 'halo function';
    return hasil;
}
//panggil function
console.log (shoutOut());

//soal 2
//buat function
function calculateMultiply(bil1, bil2) {
    let hasil = bil1 * bil2;
    return hasil;
}

//panggil function dan berikan parameter langsung ke console.log / bisa disebut memberikan argument
//sumber diatas dari web programing unpas
console.log (calculateMultiply(5, 9));

//soal 3
//buat variabel yang akan digunakan sebagai parameter
let nama = 'ikbal';
let umur = 16;
let alamat = 'kekalik timur';
let hobi = 'ngoding';

//funtionny disini
function processSentence(nama, umur, alamat, hobi) {
    let hasil = 'nama saya ' + nama + ', ' + 'umur saya ' + umur + ', ' + 'alamat saya di ' + alamat + ', ' + 'hobi saya adalah ' + hobi;
    return hasil;
}

//disini kita panggil
let fullName = processSentence(nama, umur, alamat, hobi);
console.log (fullName);