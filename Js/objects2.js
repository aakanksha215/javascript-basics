const tinderUser = {}

tinderUser.id = "17a8v"
tinderUser.name = "Avi"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "reg@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Ravi",
            secondName: "Vij"
        }
    }
}

console.log(regularUser.fullname)


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3)


const course = {
    courseName : "learn js",
    price : "999",
    courceInstructor : "aakanksha"
}



/* json */

//{
//    "courseName" : "learn js",
//    "price" : "999",
//    "courceInstructor" : "aakanksha"   
//}