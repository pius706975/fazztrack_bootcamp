// Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

// Contoh : getMonth(showMonth?)


const getMonth = (callback)=>{
    setTimeout(() => {
        let error = false;
        let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

        if(!error){
            callback(null, month);
        }else{
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}

// const showMonth = (err, month)=>{
//     if(err){
//         console.log(err);
//     }else{
//         let months = month.map((m)=>m)
//         console.log(`\n${months.join(", ")}\n`);
//     }
// }

// getMonth(showMonth);

// getMonth((err, month)=>{
//     if(err){
//         console.log(err);
//     }else{
//         let months = month.map((m)=>m)
//         console.log(`\n${months.join(", ")}\n`);
//     }
// })