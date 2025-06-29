let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2024, 0, 24)

console.log(myCreatedDate.toLocaleString())

let myCreatedDate2 = new Date("01-6-2025")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate2.getTime())

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())

newDate.toLocaleString('default', {
    weekday: "long",
})