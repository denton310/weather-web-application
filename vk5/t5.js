const lottoNums = 40;
const lottoRow = 7;

const getUserNumbers = () => {
    const userInputs = process.argv.slice(2);
    const userNumbers = userInputs.map(textNumber => { // muutetaan kokonaisluvuiksi
        return Number(textNumber);
    })
    userNumbers.sort((a, b) => (a - b)); // sort -lajittelee oletuksena tekstiä, nyt kerrotaan lajitteluperuste
    return userNumbers;
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getLottoNumbers = () => {
    const numbers = Array(lottoNums);
    const lotto = Array(lottoRow);
    for (let i=0; i<numbers.length; i++) {
        numbers[i] = i + 1;
    }

    for(let i=0; i<lotto.length; i++) {
        const index = randomIntFromInterval(0, 39 - i); // ensin 0-39, sitten 0-38...
        lotto[i] = numbers[index];
        numbers[index] = numbers[lottoNums - 1 - i];
    }
    lotto.sort((a, b) => (a - b));
    return lotto;
}

// tarkisteaan oikeat numerot
const howManyCorrect = (user, lotto) => {
    let correct = 0
    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < lotto.length; j++) {
            if (user[i] === lotto[j]) {
                correct++;
                break;
            }
        }
    }
    return correct;
}

// kutsut
const lottoNumbers = getLottoNumbers();
const userNumbers = getUserNumbers();
console.log('userNumbers', userNumbers);
console.log('lottoNumbers', lottoNumbers);
const count = howManyCorrect(userNumbers, lottoNumbers);

console.log('Correct numbers:', count)