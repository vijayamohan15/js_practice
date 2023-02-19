var country=["Finland", "Argentina", "Germany", "England", "Spain","France","Fiji"];
var map=new Map();
country.forEach(function(c){
    var k=c.charAt(0);
    if(!map.has(k)){
    map.set(k,1);
    }
    else{
    map.set(k,map.get(k)+1);
    }
})
var max=0;
for(let i of map.keys()){
  if(map.get(i)>max){
    max=map.get(i);
    console.log(i);
  }
}