const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function(acc,currval){
    return acc + currval
},0)

const myTotal1 = myNums.reduce((acc,currval)=>  acc+currval, 0)

console.log(myTotal1)
console.log(myTotal)