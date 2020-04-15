
    let promise = new Promise((resolve, reject) => {
        let a = 1 + 5
        if (a % 2 == 0 ){
                resolve ("Even Number")
            } else {
                reject("Odd Number")  
            }

        })

    promise.then ((message) =>  {
            console.log("this is the then, with an  " + message)
        })
        
        .catch ((message) => {
            console.log("This is the catch, with an " + message)
        })

    // async function f() { new = promise
    //     const response = await new ()
    //     console.log("Yeah, got it")
    // }

// backend  
// Builds a Promise using the 'new' keyword 
// builtInFuncs  
// Consumes a Promise using built-in Functions 
// asyncAwait 
// Consumes a Promise using the 'async' and 'await' keywords 