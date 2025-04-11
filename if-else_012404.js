let nilai = 80;

if (nilai >= 80 && nilai <= 100) {
    nilai = 'A';
}

else if (nilai >= 70 && nilai < 70) {
    nilai = 'B';
}

else if (nilai >= 60 && nilai < 70) {
    nilai = 'C';
}

else {
    nilai = 'D';
}

console.log(nilai)
nilai = 50;
//logika operator

//&& semua kondisi harus terpenuhi
//|| salah satu kondisi harus terpenuhi

let banding = nilai >= 80 && nilai <= 100;
console.log (banding)//&&
banding = nilai >= 80 || nilai <= 100;
console.log (banding)//||
let banding1 = nilai != 50
console.log (banding)
//operator perbandingan

let x = 10;
let y = '10';

let banding2 = x == y;
let banding3 = x === y;
console.log (banding2);
console.log (banding3)

//nested if else
let number = 6;
if (number > 6) {
    if (number % 2 == 0) {
        console.log ('lebih besar dari 5 dan genap');
    }
    else {
        console.log ('lebih besr dan ganjil');
    }
}

else {
    if (x % 2 === 0) {
        console.log ('lebih kecil dan genap');
    }

    else {
        console.log ('lebih kecil dan ganjil');
    }
}