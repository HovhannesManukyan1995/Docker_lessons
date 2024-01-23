const prompt =require("prompt-sync")();
let hcf=0;
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');
for (let i = 1; i <= number1 && i <= number2; i++) {    
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
let lcm = (number1 * number2) / hcf;
console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);
