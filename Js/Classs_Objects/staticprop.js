class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log((`Username is ${this.username}`))
    }
    createID(){
        return `763`
    }
}

const abc = new User("abc")
console.log(abc.createID())

class Teacher extends User{
    constructor(username, email){
        this.username = username
        this.email = email
    }
}