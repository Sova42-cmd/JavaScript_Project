// let myArray = [10,20,30,40,50]
// let newArray=[5,...myArray,60]
// console.log(`myArray: `,myArray);
// console.log(`newArray: `, newArray);

// changes the original, mutable.

// let task={id: 1, name: "Subject", duration: 45+"min", isDone: false}
//
// task.Address="Yerevan"
//
// console.log(task)

// doesn't change original, immutable. no order in objects.
//
// let task={id: 1, name: "Subject", duration: 45+"min", isDone: false}
//
// let newTask = {...task, Address: "Yerevan"}
//
// console.log(`original task`,task)
// console.log(`new task`, newTask)

// let initialTasks = [
//     {id: 1, name: "Subject 1", isDone: false},
//     {id: 2, name: "Subject 2", isDone: true},
//     {id: 3, name: "Subject 3", isDone: true},
//     {id: 4, name: "Subject 4", isDone: false},
//     {id: 5, name: "Subject 5", isDone: false},
//     {id: 6, name: "Subject 6", isDone: true},
// ]
//
// let task0 = {id: 0, name: "Subject 0", isDone: false}
// let task7 = {id: 7, name: "Subject 7", isDone: false}
//
//     let initialTasks2 = [task0, ...initialTasks, task7];
//
// console.log(`original array`, initialTasks);
// console.log(`destructured array`, initialTasks2);

// double destructuring --->

// let initialTasks = [
//     {id: 1, name: "Subject 1", isDone: false},
//     {id: 2, name: "Subject 2", isDone: true},
//     {id: 3, name: "Subject 3", isDone: true},
//     {id: 4, name: "Subject 4", isDone: false},
//     {id: 5, name: "Subject 5", isDone: false},
//     {id: 6, name: "Subject 6", isDone: true},
// ]
//
// let task0 = {id: 0, name: "Subject 0", isDone: false}
// let task7 = {id: 7, name: "Subject 7", isDone: false}
//
//     let initialTasks2 = [{...task0, Address: "Yerevan"}, ...initialTasks, task7];
//
//
// console.log(`task0`,task0)
// console.log(`original array`, initialTasks);
// console.log(`destructured array`, initialTasks2);

// let boysOfGago = ["Serobik", "Valodik", "Slavik"]
// let person = {name: "Gago", age: 56, isMarried: true, children: ["Anahit", ...boysOfGago, "Eva"]}
// console.log(`initial object`,person)
// console.log(`boysOfGago`, boysOfGago)

//
// let initialTasks = [
//     {id: 1, name: "Subject 1", isDone: false},
//     {id: 2, name: "Subject 2", isDone: true},
//     {id: 3, name: "Subject 3", isDone: true},
//     {id: 4, name: "Subject 4", isDone: false},
//     {id: 5, name: "Subject 5", isDone: false},
//     {id: 6, name: "Subject 6", isDone: true},
// ]
//
// let newArray = initialTasks.map((element)=>{return {...element, Duration: 60+"min"}})
//
// let task0 = {id: 0, name: "Subject 0", isDone: false}
// let task7 = {id: 7, name: "Subject 7", isDone: false}
//
//     let initialTasks2 = [{...task0, Address: "Yerevan"}, ...initialTasks, task7];
//
// console.log(`initial tasks`, initialTasks)
// console.log(`decstructured tasks`,newArray)


let initialTasks = [
    {id: 1, name: "Subject 1", isDone: false},
    {id: 2, name: "Subject 2", isDone: true},
    {id: 3, name: "Subject 3", isDone: true},
    {id: 4, name: "Subject 4", isDone: false},
    {id: 5, name: "Subject 5", isDone: false},
    {id: 6, name: "Subject 6", isDone: true},
]

let newArray = initialTasks.map((element)=>{return {...element, Duration: 60+"min"}})

let task0 = {id: 0, name: "Subject 0", isDone: false}
let task7 = {id: 7, name: "Subject 7", isDone: false}

let initialTasks2 = [{...task0, Address: "Yerevan"}, ...initialTasks, task7];

console.log(`initial tasks`, initialTasks)
console.log(`decstructured tasks`,newArray)