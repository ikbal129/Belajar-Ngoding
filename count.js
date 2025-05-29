const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const reset = document.getElementById('reset')
const judul = document.getElementById('angka')
let hitung = 0

tambah.onclick = function() {
  hitung++
  judul.textContent = hitung
}

kurang.onclick = function() {
  hitung--
  judul.textContent = hitung
}

reset.onclick = function() {
  hitung = 0
  judul.textContent = hitung
}