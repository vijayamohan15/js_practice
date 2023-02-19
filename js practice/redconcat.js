const countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const sent = countries.reduce(func);

function func(start,end,i){
    if(i==countries.length-1){
        return start+" and "+end+" are North European Countries"
    }
    else{
        return start+" , "+end
    }
}

console.log(sent);