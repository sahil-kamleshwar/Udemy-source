//return
//default, undefined, shortcut ignores after

const wallHeight=80;

function calculate(value){
    const newValue= value*2.45;   //where 2.45 is a random value
    return newValue;
}
const width=calculate(100);
const height=calculate(wallHeight);
const dimension=[width,height];
console.log(dimension);
