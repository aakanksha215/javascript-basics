function SetUsername(username){
    this.username = username
    console.log("Function Called")
}

function createUser(username, email, passward){
    SetUsername.call(this, username)
    this.email = email
    this.passward = passward
}

const a = new createUser("aak", "aak@example.com", "12c45$")
console.log(a)