// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya.

// let arr = ["a", 1, true, "joko", 37];
// console.log(arr);

// 1. join
// method yang bisa digunakan untuk menggabungkan semua elemen pada sebuah array yang memiliki tipe data yang sama maupun yang berbeda.
// console.log(arr.join(", "));

// 2. push
// method yang bisa digunakan untuk menambahkan element baru pada urutan belakang suatu array.
// arr.push("Melon");
// console.log(arr);

// 3. pop
// method yang bisa digunakan untuk menghapus element array pada urutan belakang suatu array.
// arr.pop();
// console.log(arr);

// 4. splice
// method yang bisa digunakan untuk menambahkan elemen pada array.
// arr.splice(1, 0, "jono", false, 97);
// console.log(arr.join(", "));

// 5. slice
// method yang juga digunakan untuk menghapus elemen pada array.
// let newArr = arr.slice(1, 2);
// console.log(newArr);

// 6. sort
// method untuk mengurutkan array secara alfabet
// let num = [1,101,3,2,6,7,4,19,17,11];
// [1,2,3,4,6,7,11,17,19,]
// num.sort()
// console.log(num.join(", "));

// 7. filter
// method untuk mencari elemen tertentu dalam suatu array dan mengembalikan lebih dari satu array.
// let num = [1,101,3,2,6,7,4,19,17,11];
// let numb = num.filter((num)=>{
//     return num > 5;
// });
// console.log(numb);

// 8. find
// method untuk mencari elemen tertentu dalam suatu array dan mengembalikan satu array saja.
// let arr = [1,101,3,2,6,7,4,19,17,11];
// let numb = arr.find((num)=>{
//     return num > 5;
// });
// console.log(numb);

// 9. toLowerCase & toUpperCase
// method yang digunakan untuk mengkonversi dari huruf besar ke huruf kecil dan sebaliknya.
// let str1 = "Joko sedang makan";
// console.log(str1.toUpperCase());
// let str2 = str1;
// console.log(str2.toLowerCase());

// 10. parseInt & parseFloat
// method yang digunakan untuk memaksa angka yang tersimpan pada string menjadi integer dan float.
// let str1 = "97";
// let str2 = 100;
// console.log(parseInt(str1) + str2);
// console.log(parseFloat(str1)); 