//returns object (single instance)
//returns first match if no match unddefined
// great for getting great values

const people=[
    {name:'sahil', age:21, position:'developer', id:1},
    {name:'Jordan', age:24, position:'designer', id:2},
    {name:'James', age:30, position:'the boss', id:3},
    {name:'joolie', age:35, position:'the boss', id:4},
];
const name=['sahil','Jorsdan', 'James'];
const person=people.find(function (person){
    return person.id===3;
});
console.log(person);
console.log(name.find(function (name){
    return name==='sahil';
}));
