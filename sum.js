let number=[1,3,4,5,6,7,8,9];
let sum=number.reduce(function(acc,curr){
    return acc+curr;
},0);
console.log('sum of array is',sum)