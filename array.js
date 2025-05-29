// let array = [1,2,3,4,5,6,7,8];
// console.log (array);

// let array2 = [1,"abc",[5,6,7],{nama : "ikbal"},null, undefined, true];

// console.log(array2);

// array bisa menjadi 2 dimensi dengan menampung array dalam array

let arr = [[1,2,3], [4,5,6]];
console.log(arr[0][2]);//hasilnya 3

//cara looping array 2 dimensi

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

//kalau 1 dimensi tidak perlu nested looping

let angka = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}

//array juga digunakan untuk membuat tabel dengan menggunakan looping untuk kolom dan baris

/*
[01,Arya,x2],
[02,Ikbal,x2]

absen : 01
nama : Arya
kelas : x.2

absen : 02
nama : Ikbal
kelas : x.2
*/

let data = [
  ["01", "Arya", "X.2", "SMAN 2"],
  ["02", "Ikbal", "X.2", "SMAN 2"],
  ["03", "Dika", "X.2", "SMAN 2"]
  ];
  
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (j === 0) {
      console.log (`Absen : ${arr[i][j]}`);
    }
    else if (j === 1) {
      console.log (`Nama : ${data[i][j]}`);
    }
    else if (j === 2) {
      console.log(`Kelas : ${data[i][j]}`);
    }
    else {
      console.log(`Sekolah : ${data[i][j]}\n`);
    }
  }
}