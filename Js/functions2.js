function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100, 300, 200, 1996))

function calculateCartPrice2(val1, val2, ...num2){
    return num2
}
console.log(calculateCartPrice2(100, 300, 200, 1996))

const user = {
    userName: "Aakanksha",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} ans price is ${anyObject.price}`)
}
handleObject(user)

const myNewArray = [100, 300, 600, 200]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))