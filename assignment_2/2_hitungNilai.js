const hitungNilai = (mtk, bIndo, bIng, ipa)=>{
     return (mtk + bIndo + bIng + ipa) / 4;
}

let matematika      = 80;
let bahasaIndonesia = 90;
let bahasaInggris   = 89;
let ipa             = 69;

let rataRata = hitungNilai(matematika, bahasaIndonesia, bahasaInggris, ipa);

if(rataRata > 100){
    console.log("Nilai rata-rata tidak lebih dari 100");
 }else if(rataRata >= 90){
    console.log(`Nilai rata-rata = ${rataRata}\nGrade = A`);
 }else if(rataRata >= 80){
    console.log(`Nilai rata-rata = ${rataRata}\nGrade = B`);
 }else if(rataRata >= 70){
    console.log(`Nilai rata-rata = ${rataRata}\nGrade = C`);
 }else if(rataRata >= 60){
    console.log(`Nilai rata-rata = ${rataRata}\nGrade = D`);
 }else if(rataRata >= 59){
    console.log(`Nilai rata-rata = ${rataRata}\nGrade = E`);
 }else{
    console.log("Nilai rata-rata tidak bisa dihitung");
 }


// let mulaiLagi = true;

// while(mulaiLagi){
//     const hitungNilai = (mtk, bIndo, bIng, ipa)=>{
//         return (mtk + bIndo + bIng + ipa) / 4;
//     }
    
//     let matematika      = parseInt(prompt("Masukkan Nilai Matematika"));
//     let bahasaIndonesia = parseInt(prompt("Masukkan Nilai Bahasa Indonesia"));
//     let bahasaInggris   = parseInt(prompt("Masukkan Nilai Bahasa Inggris"));
//     let ipa             = parseInt(prompt("Masukkan Nilai IPA"));
    
//     let rataRata = hitungNilai(matematika, bahasaIndonesia, bahasaInggris, ipa);
    
//     if(rataRata > 100){
//         alert("Nilai rata-rata tidak lebih dari 100");
//     }else if(rataRata >= 90){
//         alert(`Nilai rata-rata = ${rataRata}\nGrade = A`);
//     }else if(rataRata >= 80){
//         alert(`Nilai rata-rata = ${rataRata}\nGrade = B`);
//     }else if(rataRata >= 70){
//         alert(`Nilai rata-rata = ${rataRata}\nGrade = C`);
//     }else if(rataRata >= 60){
//         alert(`Nilai rata-rata = ${rataRata}\nGrade = D`);
//     }else if(rataRata >= 59){
//         alert(`Nilai rata-rata = ${rataRata}\nGrade = E`);
//     }else{
//         alert("Nilai rata-rata tidak bisa dihitung");
//     }

//     mulaiLagi = confirm("Hitung Lagi?");
// }

// alert("Terima kasih");