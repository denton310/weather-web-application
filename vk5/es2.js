/*
const sum = function (a, b) {
    return a + b
}  
*/
const sum = (a, b) => a + b;

console.log(sum(1 ,2));
toinensumma = sum;  // kopioidaan viite funktio-olioon
console.log(toinensumma(3, 4));

const tupla = a => a * 2;
console.log(tupla(7));

const moro = () => 'Moro Maailma!';
const terve = moro;
console.log(terve());
