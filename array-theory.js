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

// const people = [
//     {name: "John", budget: 3400},
//     {name: "Aaron", budget: 4500},
//     {name: "Walter", budget: 1200},
//     {name: "Victoria", budget: 9000}
// ]
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
//
// const found = people.find((p) => p.budget === 9000)
//
// // p stand for person in the people array
//
// console.log(found)

// const people = [
//     {name: "John",age: 33, email: "john@gmail.com", budget: 5000},
//     {name: "Abdul",age: 14, email: "Abdul@gmail.com", budget: 8999},
//     {name: "Levon",age: 12, email: "Levon@gmail.com", budget: 1290},
//     {name: "Abraham",age: 21, email: "Abraham@gmail.com", budget: 7800},
//     {name: "Jonathan",age: 87, email: "Jonathan@gmail.com", budget: 3400},
//     {name: "Eliza",age: 3, email: "Eliza@gmail.com", budget: 3555},
//     {name: "William",age: 19, email: "William@gmail.com", budget: 89000},
//     {name: "Maria",age: 17, email: "Maria@gmail.com", budget: 15000},
// ]

// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if(people[i].age >= 18) {
//         adults.push(people[i]);
//     }
// }
// console.log(adults);

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true;
//     }
// })
// console.log(adults)
//
// const adults = people.filter(person => person.age >= 18)
//
// console.log(adults);

