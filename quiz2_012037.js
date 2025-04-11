//soal 1
//hanya menyusun beberapa variabel kata yang telah kita buat dan hanya menambahkan setiap string dan menambah spasi
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log (word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth  + ' ' + sixth + ' ' + seventh);

//soal 2
//pakai index dari sebuah kata
let kata = 'saya suka javascript';
let firstWord = kata[0] + kata[1] + kata[2] + kata[3];
let midWord = kata[5] + kata[6] + kata[7] + kata[8];
let lastWord = kata[10] + kata[11] + kata[12] + kata[13] + kata[14] + kata[15] + kata[16] + kata[17] + kata[18] + kata[19];
console.log (firstWord + ' ' + midWord + ' ' + lastWord);

//soal 3
//pakai sub.string

let kata3 = 'saya cinta javascript';
let firsKata3 = kata3.substring(0, 4);
let midKata3 = kata3.substring(5, 10);
let lastKata3 = kata3.substring(11, 21);

console.log (firsKata3 + ' ' + midKata3 + ' ' + lastKata3);

//soal 4
//sama saja dengan soal 3 tapi kita juga menampilkan jumlah hurufnya
let kata4 = 'javascript itu keren';
let firsKata4 = kata4.substring(0, 10);
let panjangKata1 = firsKata4.length;
let midKata4 = kata4.substring(11, 14);
let panjangKata2 = midKata4.length;
let lastKata4 = kata4.substring(15, 20);
let panjangKata3 = lastKata4.length;

console.log (firsKata4 + ' = ' + panjangKata1 + ' ' + midKata4 + ' = ' + panjangKata2 + ' ' + lastKata4 + ' = ' +  panjangKata3);