// sort method 
//ASCII table 
// char: ASCII value 

//sort 

// const numbers=[5,9,1200,410,3000];
// numbers.sort();
// console.log(numbers);

// const userNames=['jyoti','priya','anushka','sen'];
// userNames.sort();
// console.log(userNames);

// const numbers=[5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });

// numbers.sort((a,b)=>a-b);
// console.log(numbers);

const products=[
    {productId:1, produceName:'p1', price:'300'},
    {productId:2, produceName:'p2', price:'3000'},
    {productId:3, produceName:'p3', price:'200'},
    {productId:4, produceName:'p4', price:'8000'},
    {productId:5, produceName:'p5', price:'500'}
];

// lowtohigh 

const LowtoHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price;
});

const HightoLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(HightoLow);