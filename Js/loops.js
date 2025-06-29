const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num)
}

const greetings = "Hello Javascript!"
for(const greet of greetings){
    console.log(`Each character is ${greet}`)
}

/************************** Map ****************************/

const map = new Map()
map.set('In', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")
map.set('In', "India")

console.log(map)

for(const [key, value] of map){
    console.log(key, ':-', value)
}
// map is iteratable but objects are not iteratable

const myObj = {
    city1 : 'Dehradun',
    city2 : 'Delhi'
}
for(const [key, value] of myObj){
    console.log(key, ':-', value)
} // This will give error