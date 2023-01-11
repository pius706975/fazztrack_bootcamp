// Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini https://jsonplaceholder.typicode.com/users. Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya


let api = 'https://jsonplaceholder.typicode.com/users';
let names = [];

const apiData = async ()=>{
    try {
        let url = await fetch(api);
        names = await url.json();
        console.log(names);

        mapping(names)
    } catch (error) {
        
    }
}

const mapping = (data)=>{
    let nameData = data.map((element)=>{
        return element.address.street;
    }).join(", ")

    console.log(nameData);
}

apiData()

// const mapping = (data)=>{
//     let biodata = data.map((element)=>{
//         return `
//             <tr>
//                 <td>${element.name}</td>
//                 <td>${element.username}</td>
//                 <td>${element.email}</td>
//                 <td>${element.website}</td>
//                 <td>${element.address.street}, ${element.address.city}</td>
//                 <td>${element.company.name}</td>
//             </tr>
//         `
//     }).join(" ")

//     // console.log(biodata);
//     document.getElementById('tbody').innerHTML = biodata;
// }

// apiData()