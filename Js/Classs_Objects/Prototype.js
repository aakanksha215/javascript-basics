let myName = "aakanksha"
console.log(myName.length)


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Power is ${this.spiderman}`)
    }
}
Object.prototype.aakanksha = function(){
    console.log(`Aakanksha is prsent in all objects`)
}

heroPower.aakanksha()


/*** **/

const User = {
    userName: "abc"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__

/************************** modern syntax **************************/

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "Aakanksha C   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUserName.trueLength()