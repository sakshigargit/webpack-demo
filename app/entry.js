import {addition, subtraction, division, multiplication} from './Calculation';

let add = addition.calculate(2, 4);
let sub = subtraction.calculate(4, 2);
let div = division.calculate(4, 2);
let mul = multiplication.calculate(4, 2);

console.log('Addition : ', add);
console.log('Subtraction : ', sub);
console.log('Multiplication : ', div);
console.log('Division : ', mul);
