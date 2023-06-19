// some method 

// const numbers=[3,5,8,9];

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart=[
    {productId:1, productName:"Mobile", price:12200},
    {productId:2, productName:"Laptop", price:12200},
    {productId:3, productName:"TV", price:12200},
];

const result=userCart.some((cartItem)=>cartItem.price>20000);
console.log(result);