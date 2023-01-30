function sum (a,b) {
    return a + b;
}

const sum2 = (a,b) => {
    return a + b;
}
/*
function hello(){
    console.log ('hello');
}
*/

const hello = () => {console.log('hello');}
const hi = hello;
hi();

function product (a,b) {
    return a * b;
}

const summa = sum2(30, 4);
const tulo = product(4,3);


console.log(summa);
console.log(tulo);
