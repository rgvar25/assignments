/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

//Sequential approach


function wait1(t) {

    return new Promise((res) => {
        setTimeout(() => res(), t * 1000);;
    })

}

function wait2(t) {

    return new Promise((res) => {
        setTimeout(() => res(), t * 1000);;
    })
}

function wait3(t) {

    return new Promise((res) => {
        setTimeout(() => res(), t * 1000);
    })
}


function calculateTime(t1, t2, t3) {
    let start = new Date().getTime();
    console.log(start);
    return wait1(t1).then(() => wait2(t2)).then(() => wait3(t3)).then(() =>{
        let end = new Date().getTime();
        console.log(end)
        return end -start
    }) 


}

calculateTime(1,2,1).then((data) => console.log(data))

module.exports = calculateTime;
