// Buatlah sambungan program menggunakan : 
// a. then catch 
// b. try catch 
// Untuk mengecek hari kerja dari kode Asynchronous disamping dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya.


const cekHariKerja = (day)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dateDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
            let cek = dateDay.find((item)=>{
                return item === day
            });

            if(cek){
                resolve(cek);
            }else{
                reject(new Error(`Hari ${day} bukan hari kerja`))
            }
        }, 3000);
    });
}

cekHariKerja("Senin")
    .then((hasilCek)=>{
        // Blok ini akan mengeksekusi apabila promisenya terpenuhi. 
        console.log(`Hari ${hasilCek} adalah hari kerja`) //Mencetak nama hari yg diinput. 
    }).catch((error)=>{ // Blok ini akan mengeksekusi apabila promisenya tidak terpenuhi.
        console.log(error.message) //Mencetak nama hari yang diinput.
    })

// Untuk penggunaannya, kita butuh anonymous function didalam then & catch beserta parameternya. 
// parameter akan mengambil value didalam resolve dan reject. 

// const cekHari = async ()=>{
//     try {
//         let hasilCek = await cekHariKerja("Rabu");
//         console.log(`Hari ${hasilCek} adalah hari kerja.`);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// cekHari();