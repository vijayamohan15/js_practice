class Utilities {
    static camelCase(str){
      str=str.toLowerCase();
      const w=str.split(" ");
      for(let i=1;i<w.length;i++){
        w[i]=w[i].charAt(0).toUpperCase()+w[i].substring(1);
      }
      return w.join("");
    }
}

console.log(Utilities.camelCase("Hi Bye"))
console.log(Utilities.camelCase("ronny siuuuu"))
console.log(Utilities.camelCase("Camera wowo trenquila messi"))
console.log(Utilities.camelCase("GREATEST OF ALL TIME"))
console.log(Utilities.camelCase("Hala Madrid"))


