function User(email, passward){
    this._email = email
    this._passward = passward

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'passward', {
        get: function(){
            return this._passward.toUpperCase()
        },
        set: function(value){
            this._passward = value
        }
    })
}

const a = new User("aaa@example.com", "12cv6N3")
console.log(a)