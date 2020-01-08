let tinggiBadan = [200,190,180,170,160,150,140,130,120,110,100];
//perulangan biasa
for (var i = 0; i < tinggiBadan.length; i++) {
  console.log("perulangan biasa");
  console.log(tinggiBadan[i]);
}
//perulangan for of
for(let tampung of tinggiBadan){
  console.log("perulangan for of");
  console.log(tampung);
}

// kesimpulan perbedaan perualangan biasa dan perulangan biasa
// variabel biasa
//   -nilai variabel tinggiBadan tetap menmapilkan nilai tinggiBadan
// variabel for of
//    -nilai variabel tinggiBadan akan di alaihkan ke varibel tampung baru ditampilkan
