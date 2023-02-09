const { state, checkMachine, checkStock, brewCoffee } = require('./3')

const boildWater = () => {
    return new Promise((resoleve, reject) => {
        console.log('boiding Water ....')

        setTimeout(()=> {
            resoleve('resolve => Water is READY')
        }, 3000)
    })
}

const grindCoffee = () => {
    return new Promise((resoleve, reject) => {
        console.log('coffe is being GRINDED')

        setTimeout(() => {
            resoleve('resolve => Coffee is Ready !!!')
        })
    })
}

const makeEspresso = () => {
    return checkMachine()
    .then(data => {
        console.log(data)

        return checkStock()
    })
    .then(stock => {
        console.log(stock)

        const promises = [boildWater(), grindCoffee()]

        return Promise.all(promises)
    })
    .then(janji => {
        console.log(janji)

        return brewCoffee()
    })
    .then(hasil => {
        console.log(hasil)
    })
    .catch(err => {
        console.log(err)
    })
}

makeEspresso()