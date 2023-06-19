// array destructuuring

// const myArr = ["value1","value2"];
// let myvar1 = myArr[0];
// let myvar2 = myArr[1];
// console.log("value of my var1", myvar1);
// console.log("value of my var2", myvar2);

// const myArr = ["value1","value2"];
// let [myvar1,myvar2]=myArr;
// myvar1="value changed"
// console.log("value of my var1", myvar1);
// console.log("value of my var2", myvar2);

// const myArr = ["value1","value2"];
// const [myvar1,myvar2]=myArr;
// myvar1="value changed"              // error
// console.log("value of my var1", myvar1);
// console.log("value of my var2", myvar2);


// const myArr = ["value1","value2","value3"];
// let [myvar1,myvar2,myvar3]=myArr;
// console.log("value of my var1", myvar1);
// console.log("value of my var2", myvar2);
// console.log("value of my var3", myvar3);

// const myArr = ["value1"];
// let [myvar1,myvar2,myvar3]=myArr;
// console.log("value of my var1", myvar1);
// console.log("value of my var2", myvar2);    //undefined
// console.log("value of my var3", myvar3);    //undefined

// const myArr = ["value1","value2","value3"];
// let [myvar1, ,myvar2]=myArr;
// console.log("value of my var1", myvar1);
// console.log("value of my var2", myvar2);   


const myArr = ["value1","value2","value3","value4"];
let [myvar1,myvar2]=myArr;
let myNewArr = myArr.slice(2)
console.log("value of my var1", myvar1);
console.log("value of my var2", myvar2);
console.log(myNewArr);
