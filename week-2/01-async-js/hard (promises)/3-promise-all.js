/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

//Parallel approach

function wait1(t) {

    return new Promise((res) => {
        setTimeout(() => res(), t*1000);;
    })

}

function wait2(t) {

    return new Promise((res) => {
        setTimeout(() => res(), t*1000);;
    })
}

function wait3(t) {

    return new Promise((res) => {
        setTimeout(() => res(), t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = new Date().getTime();
    console.log('Start:', startTime);

    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
        const endTime = new Date().getTime();
        console.log('End:', endTime);

        const timeDifference = endTime - startTime; // Result is in milliseconds
        console.log('Total time:', timeDifference + 'ms');

        return timeDifference;
    });
}



    calculateTime(1,2,1).then((data) => console.log(data))

module.exports = calculateTime;
