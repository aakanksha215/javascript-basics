const myArray = [12, 67, 91, 33, 74, 19]

// Resizable
// contain mix of different datatypes
// shallow copy

const myArray2 = new Array(1, 2, 3, 4, 5)

const newArr = myArray.join()

console.log(myArray)
console.log(newArr)

// slice , splice

console.log("A ", myArray)

const arr1 = myArray.slice(1, 3)
console.log(myArray)
console.log("B ", arr1)

const arr2 = myArray.splice(1, 3)
console.log(myArray)
console.log("C ", arr2)
