// Expressions- another way to define function
// create a variable, assign to function (not values)
//diff- hoisting, use arrow function, libraries
function addValues(num1, num2){
    return num1+num2;
}
const firstValue=addValues(2,3);
const secondValue=(12,36);

const add=function(num1, num2){
    return num1+num2;
};
const thirdValue=add(5,6);
const values=[firstValue, secondValue, thirdValue];
console.log(values);


