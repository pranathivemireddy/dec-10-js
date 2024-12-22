//Question-1
function add(a,b){
    return a+b;
}
console.log(add(10,20));
//Question-2
function string(name){
    return name.toUpperCase()
}
console.log(string('nani'));
//Question-3
function param(a){
    return 'Hello '+a;
}
console.log(param(undefined));
//Question-4
function param(arr){
    return arr.length;
}
console.log(param([]));
//Question-5
function sub(a,b){
    return a-b;
}
console.log(sub(20,10));
//Question-6
function fun(name,age){
    return `Hello ${name}! You are ${age} years old`;
}
console.log(fun('Bhargav', 12));
//Question-7
function isEven(a){
    if(a%2==0){
        return true;
    }
    else{
       return false;
    }
}
console.log(isEven(5));