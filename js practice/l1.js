//empty set
let a=[];
const set1=new Set(a);
console.log(set1);

//for-loop from 0 to 10 in set

const set2=new Set();
for(let i=1;i<=10;i++){
    set2.add(i);
}
console.log(set2);

//clear a set
const b=[1,2,3,4];
const set3=new Set(b);
set3.clear();
console.log(set3);

//set with 5 strings
const set4=new Set();
const string=["Germany","Argentina","England","France","Portugal"];
string.forEach(function(ele){
    set4.add(ele);
})
console.log(set4);


//delete an Element
let c=[1,2,3,4];
const set5=new Set(c);
set5.delete(1);
console.log(set5);

//Create a map of countries and number of characters of a country
const countries=["United States", "China", "Russia", "Brazil", "India", "Mexico", "Indonesia", "Pakistan", "Nigeria", "Bangladesh"];

const map= {};

for(let i=0;i<countries.length;i++) {
  const country=countries[i];
  map[country]=country.length;
}
console.log(map);