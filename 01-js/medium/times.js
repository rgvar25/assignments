/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let startTime = new Date()
    let startSeconds = startTime.getSeconds();
    let startmili = startTime.getMilliseconds();
    console.log(`${startSeconds} : ${startmili}`);

    let sum = 0;

    let i = 1;

    while (i <= n) {
        sum += i
        i++;
    }

    let endTime = new Date();
    let endSeconds = endTime.getSeconds();
    let endmili = endTime.getMilliseconds();
    console.log(`${endSeconds} : ${endmili}`);

    if (endSeconds < startSeconds) {
        endSeconds += 60
    }


    console.log(parseFloat(endSeconds.toString() + '.' + endmili.toString()))
    console.log(parseFloat(startSeconds.toString() + '.' + startmili.toString()));

    return (parseFloat(endSeconds.toString() + '.' + endmili.toString()) - parseFloat(startSeconds.toString() + "." + startmili.toString()));

}


console.log(calculateTime(10000))