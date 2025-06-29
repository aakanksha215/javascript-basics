const myObj = {
    js: 'javascript',
    cpp: 'C++',
    py: 'python',
    rb: 'ruby'
}

for(const keys in myObj){
    console.log(keys)
}
for(const keys in myObj){
    console.log(myObj[keys])
}

/************************* In arrays ***************************/

const cities = ["Dehradun", "Haridwar", "Rishikesh", "Srinagar"]

for(const keys in cities){
    console.log(cities[keys])
}