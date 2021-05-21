// primitive data types
// string, numbers, symbol, boolean, undefined, null
// arrays, functions, object=object

// when assigning primitive value data types values to a variable, any changes made directly to that value without effectiing any other value
// when assigning non-primitive data types values to a variabl, so any change will affet the variable

let person={name:'bob'};
let person2=person;
person2.name='susy';
console.log(`the name of the first person is ${person.name}`);
console.timeLog(`the name of the seconf person is ${person2.name}`);
