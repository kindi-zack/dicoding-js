function coffeePromise(resolve, reject) {
    let kopi = 'Kopi susu'
    
    if(kopi) {
        resolve(`Pesanan anda adalah ${kopi.toUpperCase()}`)
    }else {
        reject('anda belum pesan')
    }
}

function makeCofee () {
    return new Promise(coffeePromise)
}

// makeCofee()
// .then(pesan => {
//     console.log(pesan)
// })
// .catch(err => {
//     console.log(err)
// })

const tempPromiseCofee = makeCofee()
console.log(tempPromiseCofee)




// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;
//     if (isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat");
//     } else {
//         reject("Mesin kopi tidak bisa digunakan");
//     }
// }
 
 
// const makeCoffee = () => {
//     return new Promise(executorFunction);
// }
// const coffeePromise = makeCoffee();
// // console.log(coffeePromise);
// coffeePromise
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })