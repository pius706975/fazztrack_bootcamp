// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5. 
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

// CARA 1
// const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray)=>{
//     let arr = dataArray;
//     let result = arr.filter((num)=>{
//         if(num <= nilaiAkhir && num >= nilaiAwal){
//             return num;
//         }
//     });
//     if(nilaiAwal > nilaiAkhir){
//         console.log("Nilai akhir harus lebih besar dari nilai awal");
//         result = [];
//     }else if(arr.length <= 5){
//         console.log("Jumlah angka dalam dataArray harus lebih dari 5");
//         result = [];
//     }else if(result.length == 0){
//         console.log("Nilai tidak ditemukan");
//     }
    
    
//     return result;
// }

// CARA 2
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray)=>{
    // validasi paling awal
    if(dataArray.length <= 5){
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }else if(nilaiAwal >= nilaiAkhir){
        return "Nilai akhir harus lebih besar dari nilai awal";
    }

    let result = dataArray.filter((num)=>
        num >= nilaiAwal && num <= nilaiAkhir
        );
    
    // validasi untuk nilai yang tidak ditemukan saat dilakukan filter
    if(result.length === 0){
        return "Nilai tidak ditemukan"
    }

    return result;
}

// PRINT OUTPUT
let result = seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
// let result = seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// let result = seleksiNilai(4, 17 , [2, 25, 4]);
// let result = seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);

// result.sort((a, b)=>{
//     return a - b;
// })
console.log(result);