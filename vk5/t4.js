const luoLaskuri = () => {
    let lsk = 0;
    return () => ++lsk;
}

const laskuri = luoLaskuri();
setInterval(
    () => {
        console.log(laskuri());
    }, 1000);
