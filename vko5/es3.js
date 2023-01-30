
function sayHello(name) {
    const greeting = `Hello, ${name}`;
    const helloToConsole = function() { console.log(greeting);} 
    return helloToConsole;
 }

const hi = sayHello('Akseli');
hi();