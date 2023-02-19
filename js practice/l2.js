const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

//union
const union = [...new Set([...a, ...b])];
console.log(union);

//intersection
const intersection = a.filter(x => b.includes(x));
console.log(intersection);

//diff
const difference = a.filter(x => !b.includes(x));
console.log(difference);