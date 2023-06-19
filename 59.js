// reduce method 

// const numbers=[1,2,3,4,5];

// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// });
// console.log(sum);


const userCart=[
    {productId:1, productName:"Mobile", price:12200},
    {productId:2, productName:"Laptop", price:12200},
    {productId:3, productName:"TV", price:12200},
];

const totalAmount= userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+currentProduct.price;
},0)
console.log(totalAmount);