function morning(){
    return `Good Morning Google`;
}
function greet(name,cb){
    cb();
    const myName='Yahoo';
    console.log(`${name}, my name is ${myName}`);
}
greet('Google', morning);
greet('bing', morning);
