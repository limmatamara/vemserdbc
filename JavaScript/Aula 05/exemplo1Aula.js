// function isPositive(number) {
//     return number >=0;
// }
var isPositive = (number) => number>=0;

// function randomNumber() {
//     return Math.random;
// }
var randomNumber= () => Math.random;

// document.addEventListener('click', /*daqui p frente, substitua por arrow*/  function() {
//     console.log('Click');
// });

document.addEventListener ('click', () => console.log('Click')); 

var funcArrowConsole = () => console.log('click'); 
document.addEventListener('click', funcArrowConsole); 