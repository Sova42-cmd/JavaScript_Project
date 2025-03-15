// const names = ["David", "Aram", "Armen", "Artur", "Vazgen"]

// names.push("Hayk")
// displaying at the beginning
//
// names.unshift("Hayk")
// displaying at the end
//
// names.shirt()
// removes the first element from an array
//
// names.pop()
// removes the last element from an array

// const letters = ["r","e", "t", "a", "c"]
//
// // const sorted = letters.toSorted
//
// console.log(letters.toSorted())
// // shouldn't change the origianl array, idk

const people = [
    {name: "John", budget: 3400},
    {name: "Aaron", budget: 4500},
    {name: "Walter", budget: 1200},
    {name: "Victoria", budget: 9000}
]
// console.log(people.indexOf({budget: 9000}))

// doesnt work like this in JavaScript :/

// let findPerson
//
// for (let person of people) {
//     if(person.budget === 9000) {
//         findPerson = person
//     }
// }
// console.log(findPerson)

// Should often use const

// const searchForPerson = people.find(function(person) {
//     // if (person.budget === 9000) {
//     //     return true
//     // }
//     return person.budget === 9000
// })

const found = people.find((p) => p.budget === 9000)

// p stand for person in the people array

console.log(found)
