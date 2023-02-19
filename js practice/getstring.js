const arr=["hi",1,29,"bye"];

const str=arr.filter(func);

function func(a){
    if(typeof a=="string")
    return a;
}

console.log(str)