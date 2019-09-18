//Menambahkan value ke array
let bulan = ['januari', 'febuari', 'maret', 'juni'];
bulan.splice(3, 0, 'april');
console.log(bulan);

//Replace value array berdasarkan index yang dipilih
bulan.splice(4, 1, 'mei')
console.log(bulan);

//Delete value array berdasarkan index yang dipilih
bulan.splice(4, 1)
console.log(bulan);

//Delete semua element setelan index ke 1
bulan.splice(1)
console.log(bulan);

//Fish
let myFish = ['angle', 'clown', 'trumpet', 'sturgeon'];
let removed = myFish.splice(0, 3, 'parrot', 'anemone', 'blue');
console.log(myFish);