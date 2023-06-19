// object destructuring

// const band={
//     bandName:"led zepplin",
//     famousSong:"stair way to heaven"
// };
// const bandName=band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName,famousSong);

const band={
    bandName:"led zepplin",
    famousSong:"stair way to heaven",
    year:1968,
    anotherfamousSong:"kashmir"
};
const {bandName,famousSong,...restprops}=band;
console.log(bandName);
console.log(restprops);


