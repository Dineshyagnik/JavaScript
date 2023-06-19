// function hello(){
//     console.log("hello world");
// }
// hello.call();   //call,apply,bind

//call
// function about(hobby,favmusician){
//     console.log(this.firstName, this.age,hobby,favmusician);
// }
// const user1={
//     firstName:"harshita",
//     age:23,
// }
// const user2={
//     firstName:"jyoti",
//     age:18,
// }
// about.call(user2,"Joke","alka");

//apply
// function about(hobby,favmusician){
//     console.log(this.firstName, this.age,hobby,favmusician);
// }
// const user1={
//     firstName:"harshita",
//     age:23,
// }
// const user2={
//     firstName:"jyoti",
//     age:18,
// }
// about.apply(user2,["Joke","alka"]);

//bind
function about(hobby,favmusician){
    console.log(this.firstName, this.age,hobby,favmusician);
}
const user1={
    firstName:"harshita",
    age:23,
}
const user2={
    firstName:"jyoti",
    age:18,
}
const func = about.bind(user1,"Joke","alka");
func();
