const coding = ["js", "java", "C++", "python", "ruby"]

coding.forEach(function name(val){
    console.log(val)
})

coding.forEach((item)=>{
    console.log(item)
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)


coding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})

const values = coding.forEach((item)=>{
    console.log(item)
})
console.log(values)

/******************************************************************/

const myNumber = [1,2,3,4,5,6,7,8,9]
const newNumber = myNumber.filter((num) => num>4)
console.log(newNumber)

const newNum = []

myNumber.forEach((num)=>{
    if(num > 4){
        newNum.push()
    }
})
console.log(newNum)