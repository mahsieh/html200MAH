function square() {
    let numberToSquare = prompt('Please provide a number to square.');
    let result = Number(numberToSquare)*Number(numberToSquare);
    alert('Your number squared is: ' + result)
}

function multiplier() {
    let firstNumber = prompt('Please provide the first number to multiply.');
    let secondNumber = prompt('Please provide the second number to multiply.');

    let product = Number(firstNumber)*Number(secondNumber);
    alert('The product of your two numbers (' + firstNumber + ' and ' + secondNumber + ') is: ' + product);
}