// forEach, map, filter, find, reduce
//iterate over arrays- no loop required
//accepts callback function-function as an argument

//forEach
/*does not return new array*/
const people=[
    {name:'sahil', age:21, position:'developer'},
    {name:'Jordan', age:24, position:'designer'},
    {name:'James', age:30, position:'the boss'},
];
function showPerson(person){
    console.log(person);
}
people.forEach(showPerson);