// for in loop

const fruits = ["Apple","Mango","Grapes","fruit4","fruit5"];
const fruits2 = [];
for(let index in fruits){
   fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
