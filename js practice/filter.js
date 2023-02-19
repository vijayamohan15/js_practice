const countries=["Ethiopia","Egypt","England","India","Australia","Pakistan","Ecuador"]


const country=countries.filter(checkE);

function checkE(co){
    if(co.charAt(0)=='E')
        return co;
}

console.log(country);