// lexical scope

// function myApp() {
//     const myVar = "value1";
//     function myFunc() {
//         // const myVar="value59";
//         console.log("inside myfunc",myVar);
//     }
    
//     console.log(myVar);

//     myFunc();
// }
// myApp();


const myVar = "value1";
function myApp() {
   
    function myFunc() {
        const myFunc2=()=>{
            console.log("inside myfunc",myVar);
        }
        myFunc2();
      
    }
    
    console.log(myVar);

    myFunc();
}
myApp();