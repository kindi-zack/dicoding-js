function makeCoffe() {
    const ingrediant = {
        sugar: 20,
        cofeeBean: 0
    }
    return new Promise((resolve, reject) => {
        if(ingrediant.sugar > 5 && ingrediant.cofeeBean > 5) resolve('Kopi anda sedang dibuat')
        reject ('Tidak cukup bahan')
    })
}

makeCoffe()
.then(data => {
    console.log(data)
})
.then(null, err=> {
    console.log(err)
})