class User{
    constructor(email, passward){
        this.email = email
        this.passward = passward
    }
    get passward(){
        return this._passward.toUpperCase()
    }
    set passward(value){
        this._passward = value.toUpperCase()
    }
}

const a = new User("abc@example.com", "12bm89z")
console.log(a)