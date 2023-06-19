// spread operator in array

// const array1 =[1,2,3];
// const array2 = [5,6,7];

// const newArray =[...array1,...array2,778,33,45];
// const newArray =[..."abc"];
// const newArray =[..."1233554658679"];
// console.log(newArray);


// spread operator in object

// const obj1 ={
//     key1:"value1",
//     key2:"value2"
//     //key1:"value34"  // now key1 = value34
// }
// const obj2 ={
//     key3:"value3",
//     key4:"value4"
// }
// const newObj={...obj1,...obj2}
// console.log(newObj);

// const obj1 ={
//     key1:"value1",
//     key2:"value2"
//     //key1:"value34"  // now key1 = value34
// }
// const obj2 ={
//     key1:"unique",  // now key=unique
//     key3:"value3",
//     key4:"value4"
// }
// // const newObj={...obj1,...obj2}  // print key1=unique
// const newObj={...obj2,...obj1}      // now key1=value1
// console.log(newObj);


const obj1 ={
    key1:"value1",
    key2:"value2"
    //key1:"value34"  // now key1 = value34
}
const obj2 ={
    key3:"value3",
    key4:"value4"
}
// const newObj={...obj1,...obj2}
// const newObj={...obj1,...obj2,key89:"value89"}
// const newObj={..."abc"}
// const newObj={...["item1","item2"]}
const newObj={..."abcdefghijklmnopqrstuvwxyz"}
console.log(newObj);