const name = "aakanksha"
const count = 47

//console.log(name + count + " hello")

console.log(`Hello my name is ${name} ans count is ${count}`)

const newString = new String('aakanksha-ac')

console.log(newString[0])
console.log(newString.__proto__)

console.log(newString.length)
console.log(newString.toUpperCase())
console.log(newString.charAt(2))
console.log(newString.indexOf('h'))

const newstr = newString.substring(0,4)
console.log(newstr)

const newstr1 = newString.slice(-8,5)
console.log(newstr1)


const newStringOne = "     aakanksha  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://aakanksha.com/aakanksha21c%c"

console.log(url.replace('c%','-'))
console.log(url.includes('aakanksha'))

// convert string to array->
console.log(newString.split('-'))