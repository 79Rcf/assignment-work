// Write a function to calculate the HCF of a number entered


let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

console.log("The HCF is:", findHCF(num1, num2));

function findHCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

  
