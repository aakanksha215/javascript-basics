const ukCities = ["Dehradun", "Haldwani", "Haridwar", "Rishikesh"]
const ncrCities = ["Noida", "Gurugram", "Gaziabad", "Faridabad"]

//ukCities.push(ncrCities)
//console.log(ukCities)

const allCities = ukCities.concat(ncrCities)
console.log(allCities)

const all_new_cities = [...ukCities, ...ncrCities]
console.log(all_new_cities)

const anotherArray = [1, 2, 3, 4, [8, 6, 4], 19, [23, 15, 17, [18, 27]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Aakanksha"))
console.log(Array.from("Aakanksha"))
console.log(Array.from({name: "aaksnksha"}))

let score1 = 100
let score2 = 200
let score3 = 500

console.log(Array.of(score1, score2, score3))