const { use } = require("react")

class User{
    constructor(username, email, passward){
        this.username = username
        this.email = email
        this.passward = passward
    }
    encryptPassward(){
        return `${this.passward}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const a = new User("Aak", "aak@12example.com", "149@")
console.log(a.encryptPassward())
console.log(a.changeUserName())


function User(username, email, passward){
    this.username = username
    this.email = email
    this.passward = passward
}

User.prototype.encryptPassward = function(){
    return `${this.passward}abc`
}