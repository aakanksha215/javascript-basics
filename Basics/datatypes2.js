// Primitive datatypes
/* 7 datatypes -> String, Number, Boolean, null, undefined, Symbol, BigInt */


// Reference datatypes (Non-Primitive)
/* Array, Object, Function*/

/* Dynamically typed */

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID)

const myFunction = function(){
    console.log("Hello")
}
console.log(typeof myFunction)


/**********************************************/

/* All primitive datatype -->> Stack memory */
/* Non-primitive datatypes -->> Heap memory */