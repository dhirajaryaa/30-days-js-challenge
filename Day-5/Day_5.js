// Activity 1: Function Declaration ----
function checkNumType(num){
    if(num%2 === 0){
        console.log("This Number is evan");
    }else{
        console.log("This Number is odd");
    }
}
// checkNumType(14);

function square(val){
    return val*val
}
// console.log(square(2));

// Activity 2: Function Expression ----
const findMaxNum = function(num1,num2){
    if(num1>num2){
        console.log(num1,"Greater Than",num2);
    }else{
        console.log(num2,"Greater Than",num1);
    }
}
// findMaxNum(15,19);

const Str = function(str1,str2){
    return str1+str2
}
// console.log(Str("Dhiraj","Arya"));

// Activity 3: Function Expression ----
const sumNumber = (num1,num2)=>{
return num1+num2
}
// console.log(sumNumber(15,8));

const checkStr = (str)=>{
    if(str === "arya"){
        return true
    }else{
        return false
    }
}
// console.log(checkStr("arya"));
// console.log(checkStr("Dhiraj"));

