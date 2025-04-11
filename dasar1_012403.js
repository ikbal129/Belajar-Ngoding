//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';
//variabel bisa menampung tipe data string, number, array, object, boolean

let nama = 'ikbal';//string
let umur = 22;//number
let apakahbenar = true;//boolean
let uang = 5000.5 //number koma

//operator aritmatika
let angka1 = 10;
let angka2 = 20;
console.log (angka1 + angka2);
console.log (angka1 - angka2);
console.log (angka1 * angka2);
console.log (angka1 / angka2);
console.log (angka1 % angka2);

//belajar mengisis variabel atau assignment
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log (penampungHasilOperatorAritmatika)

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log (penampungHasilOperatorAritmatika)

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log (penampungHasilOperatorAritmatika)

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log (penampungHasilOperatorAritmatika)

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log (penampungHasilOperatorAritmatika)

//string juga bisa ditambah tapi tidak bisadikurang secara dengan operator aritmatika

let firstName = 'agus';
let lastName = 'setiawan';
let fullName = firstName + ' ' + lastName
console.log (firstName);
console.log (lastName);
console.log (fullName);
console.log (firstName - lastName)
//alur pembacaan code
//untuk membaca code kita harus membaca dari kiri kekanan dan dari atas ke bawah
//contoh

let number = 20;
console.log (number + 10);//30
number = 10;
console.log (number + 10);//20
number = false;
console.log(number + 10)// 10

//kenapa false - 10 tetap 10
//karena false = 0 dan true itu 1
console.log (true + 10);

//membaca error
//error itu wajib

//contoh error
const hewan = 'jerapah';
console.log (hewan);
hewan ='buaya';

//tips selalu teliti dan kalau ada error dibaca aja