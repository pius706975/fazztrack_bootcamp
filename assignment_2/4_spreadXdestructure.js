let data = {
    id          : 1,
    name        : "Leanne Graham",
    username    : "Bret",
    email       : "Sincere@april.biz",
    address     : {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },

    phone       : "1-770-736-8031 x56442",
    website     : "hildegard.org",
}

console.log(data);

let updateData = {...data, name: "Pius Restiantoro", email: "piusrestiantoro2@gmail.com", hobby: "Flying"}
let {street, city} = data.address;

console.log(`${updateData}\n`);
console.log(`Street: ${street}\nCity: ${city}`);