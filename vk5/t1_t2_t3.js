/*
function luoLaskuri(){
    let lsk = 0;
    return function() {
        lsk++;
        return lsk;
    }
}
*/

const luoLaskuri = () => {
    let lsk = 0;
    return () => ++lsk;
}




const laskuri1 = luoLaskuri(); // halutaan paluuarvo, ei viitettä
console.log(laskuri1()); // laskurin arvo 1
console.log(laskuri1()); // arvo 2
console.log(laskuri1()); // arvo 3

const laskuri2 = luoLaskuri();
console.log(laskuri2()); // arvo 1
console.log(laskuri2()); // arvo 2