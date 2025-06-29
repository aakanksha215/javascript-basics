// singleton

// object literals

const mySym = Symbol("key")

const jsUser = {
    name: "Aakanksha",
    age: 18,
    [mySym]: "myKey1",
    location: "Dehradun",
    email: "aakanksha12@gmail.com"
}

console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser.mySym)
console.log(jsUser[mySym])

jsUser.email = "aakanksha@yahoo.com"
//Object.freeze(jsUser)
jsUser.email = "aakanksha@chatgpt.com"
console.log(jsUser.email)

jsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(jsUser.greeting())

jsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`)
}


