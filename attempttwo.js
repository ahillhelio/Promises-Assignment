function backEnd (valueNumber) {
    return new Promise ((resolve) => {
        return valueNumber % 2 === 0 ? resolve('Even') : resolve('Odd')
    })
} //Ternary Operator is a substitute for the actual words "IF/ELSE"

const determineNumerality = value => Promise.resolve(value % 2 === 0 ? 'Even' : 'Odd')

//const determineNumeralityAsync = async (value) => value % 2 === 0 ? 'Even' : 'Odd'

//Built-In Function:
backEnd(7)
.then(results => console.log(results))

backEnd(70)
.then(results => console.log(results))

//Async/Await Function:

const asyncAwait = async () => {
    const result1 = await backEnd(7)
    console.log(result1)

    const result2 = await determineNumeralityAsync(70)
    console.log(result2)

}

asyncAwait().catch(console.error)


// const blah = backEnd(4) // don't do this

// backEnd (4)
// .then(function(result) {
//     console.log(result)
// })