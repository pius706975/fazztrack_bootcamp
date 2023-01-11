// // Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function dengan data sebagai berikut:


const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

const searchName = (search, max, callback)=>{
    let filterName = names.filter((name)=>{
        // memeriksa nama berdasarkan huruf yang dimasukkan
        return name.toLowerCase().includes(search.toLowerCase());
    });
    
    let result = filterName.slice(0, max);

    callback(result);
} 

const cbfn = (result)=>{
    console.log(result);
}

searchName("an", 3, cbfn);
searchName("AN", 6, cbfn);
searchName("c", 3, cbfn);
searchName("dr", 1, cbfn);
searchName("th", 3, cbfn);
