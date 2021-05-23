const globalNumber=5;
function add(num1, num2){
    const globalNumber=10;
    const result=num1 + num2 + globalNumber;
    function multiply(){
        globalNumber=100; 
        multiplyResult=result*globalNumber;
        console.log(multiplyResult);
    }
    console.log(multiply.result)
    multiply();
    return result;
}
console.log(add(3,4));