const printGreeting = (name) => {
    console.log (`Hello there, ${name}!`);
}

// printGreeting('Charlie');

//splitting the string
//reversing all the words
//then joining the strings again
const reverseWordOrder = (argument) => {
    // return argument.split('').reverse().join('');
    console.log(argument.split('').reverse().join(''))
}

// reverseWordOrder(`I'm going to bed`);

const calculate = (num1, num2, operation) => {
    if (operation === 'add') { console.log(num1 + num2) }
    if (operation === 'sub') { console.log(num1 - num2) }
    if (operation === 'mult') { console.log(num1 * num2) }
    if (operation === 'div') { console.log(num1 / num2) }
    if (operation === 'exp') { console.log(Math.pow(num2, num1)) }
    // if (operation === 'mult') { console.log()}
}

// calculate(2, 3, 'exp');


