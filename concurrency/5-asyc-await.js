// https://www.dicoding.com/academies/256/tutorials/14052

const { state, checkMachine, checkStock, brewCoffee } = require('./3')
const { grindCoffee, boildWater } = require('./4.promise-all')

state.isCoffeeMachineBusy = true; // for testing err

async function makeEspresso() {
    try {
        const machine = await checkMachine()
        const stock = await checkStock()
        const urCoffee = await brewCoffee()
        const promises = await Promise.all([boildWater(), grindCoffee()])

        console.log(machine)
        console.log(stock)

        console.log(promises)
        console.log(urCoffee)    
    }catch(err) {
        console.log('### CATCH ERROR ###')
        console.log(err)
    }
}

makeEspresso()
// console.log(state)