const user = {
    userName: "aakanksha",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`)
    }
}
// this is used to refer to current context

user.welcomeMessage()
user.userName = "pihu"
user.welcomeMessage()

function code(){
    let username = "tini"
    console.log(this.username)
    //console.log(this)
}
code()

const addTwo = (num1, num2) =>{
    return num1 + num2
}
const addTwo2 = (num1, num2) => (num1 + num2)

const urName = (num1, num2) =>({userName: "aakanksha"})
console.log(urName(9,5))

console.log(addTwo(9,1))