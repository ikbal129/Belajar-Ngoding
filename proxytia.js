//buat varuabel nama dan peran
let nama = prompt('masukkan nama anda');
let peran = prompt('pilih peran anda \npilihan : kesatria - tabib - penyihir');

//code buat nentuin
if (peran == "kesatria") {
  console.log ('halo ' + peran + ' ' + nama + ' gunakan senjatamu untuk menyerang musuh!!');
}
else if (peran == "tabib") {
  console.log ('halo ' + peran + ' ' + nama + ' bantu teman mu yang terluka!!');
}
else if (peran == "penyihir") {
  console.log ('halo ' + peran + ' ' + nama + ' gunakan sihir mu untuk memenangkan peperangan');
}
else {
  console.log("kayaknya kamu jai bot aja ya peran yang kamu pilih ga ada");
}