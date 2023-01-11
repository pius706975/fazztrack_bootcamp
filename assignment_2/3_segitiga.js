const printSegitiga = (ukuran)=>{
    let str = "";

    for(let a=ukuran; a>=1; a--){
        for(let b=1; b<=a; b++){
            str += `${b} `;
        }
        str += "\n"
    }

    return str
}

console.log(printSegitiga(5));