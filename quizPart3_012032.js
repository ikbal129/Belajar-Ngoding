//LOOPING MAJU
let i = 1;
console.log ('LOOPING MAJU');
while (i <= 10) {
    console.log (i);
    i++
}

//LOOPING MUNDUR
let j = 10;

console.log ('LOOPING MUNDUR');
while (j >= 1) {
    console.log (j);
    j--
}

//soal 2
console.log ('LOOPING MAJU FOR');
for (let x = 1; x <= 10; x++) {
    console.log(x);
}

console.log ('LOOPING MUNDUR FOR');
for (let y = 10; y >= 1; y--) {
    console.log (y);
}

//SOAL 3

for (let a = 1; a <= 100; a++) {
    if (a % 2 === 0) {
        console.log ('genap');
    }
    else {
        console.log ('ganjil');
    }
    console.log (a);
}

//soal 4
for (let o = 1; o <= 100; o += 2) {
    if (o % 3 === 0) {
        console.log (o +' adalah kelipatan 3');
    }
}

for (let p = 1; p <= 100; p += 5) {
    if (p % 5 === 0) {
        console.log (p + ' adalah kelipatan 5');
    }
}

for (let q = 1; q <= 100; q += 9) {
    if (q % 9 === 0) {
        console,log (q + ' adalah kelipatan 9');
    }
}

//contoh lain

for (let b = 1; b <= 100; b++) {
    if (b % 3 === 0) {
        console.log (b + ' kelipatan 3');
    }
    else if (b % 5 === 0) {
        console.log (b + ' kelipatan 5');
    }

    else if (b % 4 === 0) {
        console.log (b + ' kelipatan 4');
    }
    else {
        console.log (b)
    }
}