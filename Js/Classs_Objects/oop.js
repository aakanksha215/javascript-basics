const user = {
    username: "aak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
    }
}

//console.log(user.username)
//console.log(user.getUserDetails())

//const promiseOne = new Promise()
//const date = new Date()

// new is used to create new context

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("aakanksha, 11, true")
const userTwo = new User("aak, 51, false")
console.log(userOne)
console.log(userTwo)