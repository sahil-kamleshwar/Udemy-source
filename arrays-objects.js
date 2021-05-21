let names=['sahil', 'rohan', 'devesh', 'himanshu'];
//length
console.log(names.length);
console.log(names[names.length]-1);

//concat
const lastNames=['pepper', 'onion','banana'];
const allNames=names.concat(lastNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

//unshift
allNames.unshift('ansh');
console.log(allNames);

//shift
allNames=shift();
console.log(allNames);

//splice
/* -grab specific item from array or we can say it mutate original array */
const specificNames=allNames.splice(2,1);
console.log(allNames);
