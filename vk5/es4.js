function calculateSum(a,b, callback) {
    return callback(`${a} + ${b}  = `, a + b)
}
/*
function logIt(name, value) {
    console.log(name, value);
}
*/

calculateSum(4,5, console.log);