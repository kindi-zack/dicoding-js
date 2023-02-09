const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

// Untuk membuat espresso lakukan pengecekan ketersediaan mesin, kemudian periksa stok di dalam mesin, kemudian buat kopi.”

function checkMachine() {
    return new Promise((resolve, reject) => {
        if (!state.isCoffeeMachineBusy) resolve('Coffe Machine is Avaible')

        reject('cofee Machine is Busy, NOT AVAIBLE')
    })
}

function checkStock() {
    return new Promise((resolve, reject) => {
        if (state.stock.coffeeBeans > 0 && state.stock.water > 0) {
            resolve('Stock is Avaible, you can make espresso')
        } else {
            reject('Stock is not ENOUGH')
        }
    })
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('your ESSPRESSO IS READY !!')
        }, 2000)
    })
}

function makeEspresso() {
    return checkMachine()
        .then(data => {
            console.log(data)

            return checkStock()
        })
        .then(stock => {
            console.log(stock)

            return brewCoffee()
        })
        .then(readyCoffe => {
            return readyCoffe
        })
        .catch(err => {
            console.log(err)
        })
}

// makeEspresso()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

module.exports = {
    checkMachine, checkStock, brewCoffee, state
}