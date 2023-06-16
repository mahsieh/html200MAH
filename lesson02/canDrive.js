const firstName = 'Capable'; 
const lastName = 'Driver'; 
const legalAge = 16;
let driverAge = 18;

if (driverAge > legalAge) {
    console.log(firstName + ' ' + lastName + ' can drive. They have been driving for ' + (driverAge - legalAge) + ' years.')
}
else {
    for (let i = 5; i >= 0 ; i--) {
        console.log(i);
    }
}