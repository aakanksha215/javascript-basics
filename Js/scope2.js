function one(){
    const username = "aakanksha"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const userName = "aakanksha"
    if(userName == "aakanksha"){
        const website = "youtube"
        console.log(userName + website)
    }
}
console.log(userName)

/*****************************************************************/

function addOne(num){
    return num + 1
}
addOne(6)

const addTwo = function(num){
    return num + 2
}
addTwo(7) // we can not declare this before function addTwo