// splice method 
// start,delete ,insert 

const myArray=["item1","item2","item3"];

// delete 
// const deletedItem=myArray.splice(1,1);
// console.log('deleted item is',deletedItem);
// console.log(myArray);

//insert 
// myArray.splice(1,0,'inserted item')
// console.log(myArray);

// delete and insert 
const ans =myArray.splice(1,2,'inserted1','inserted2');
console.log("deleted item is",ans);
console.log(myArray);