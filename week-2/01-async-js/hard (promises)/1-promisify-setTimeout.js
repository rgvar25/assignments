/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise((res,rej) => {

        setTimeout(() => res(),n*1000)
    })
}


wait(5).then(() => console.log('resolved'))

async function timeout(n){
    await wait(n)
    console.log("resolved 2");
}

timeout(1)

module.exports = wait;
