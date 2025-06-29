class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, passward){
        super(username)
        this.email = email
        this.passward = passward
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const a = new Teacher("abc", "abc@example.com", "1290")
a.addCourse()
a.logMe() 