// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

let booksData = [
    {
        name: "shinchan", 
        pages: 50, 
        isColorful: true
    },

    {
        name: "Kalkulus", 
        pages: 250, 
        isColorful: false
    },

    {
        name: "doraemon", 
        pages: 40, 
        isColorful: true
    },

    {
        name: "algoritma", 
        pages: 250, 
        isColorful: false
    },
];

// 1
const filterBooks = (colorful, amountOfPage)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let books = booksData;
        
            if (amountOfPage >= 40) {
                resolve(books.filter(dataOfBooks => dataOfBooks.pages >= amountOfPage && dataOfBooks.isColorful == colorful));
            } else {
                let errorMessage = `Sorry, the book with ${amountOfPage} pages & ${colorful} is not available`         
                reject(errorMessage);
            }
        }, 3000);
    });
}

const checkBooks = async ()=>{
    try {
        let check1 = await filterBooks(true, 40);
        console.log(check1, "\n");

        let check2 = await filterBooks(false, 200);
        console.log(check2, "\n");

        let check3 = await filterBooks(true, 30);
        console.log(check3);
    } catch (error) {
        console.log(error);
    }
}

checkBooks();


// 2
const addBook = (name, pages, isColorful)=>{
    return new Promise((resolve)=>{
        let newBook = {
            name: name,
            pages: pages,
            isColorful: isColorful
        }

        booksData.push(newBook);
        resolve(`The book named "${name}" added successfully\n`)
    });
}

addBook("Joko Sang Raja Hutan", 300, false)
.then((res)=>{
    console.log(res);
})


addBook("Belajar Javascript dalam 7 jam", 54, true)
.then((res)=>{
    console.log(res);
})