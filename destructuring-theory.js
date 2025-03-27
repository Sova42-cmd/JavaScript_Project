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


// let initialTasks = [
//     {id: 1, name: "Subject 1", isDone: false},
//     {id: 2, name: "Subject 2", isDone: true},
//     {id: 3, name: "Subject 3", isDone: true},
//     {id: 4, name: "Subject 4", isDone: false},
//     {id: 5, name: "Subject 5", isDone: false},
//     {id: 6, name: "Subject 6", isDone: true},
// ]
//
// let newArray = initialTasks.map((element, index)=>{return {...element, Duration: index*10+"min"}})
//
// let task0 = {id: 0, name: "Subject 0", isDone: false}
// let task7 = {id: 7, name: "Subject 7", isDone: false}
//
// let initialTasks2 = [{...task0, Address: "Yerevan"}, ...initialTasks, task7];
//
// console.log(`initial tasks`, initialTasks)
// console.log(`decstructured tasks`,newArray)

// Basic Destructuring:
//     Extract the first three elements from the array numbers and store them in separate variables.

// const numbers = [5, 10, 15, 20, 25];
//
// const [first, second, third] = numbers;
//
// console.log(first);
// console.log(second);
// console.log(third);

// Skipping Elements:

// const values = [1, 2, 3, 4, 5];
// const [, second, , fourth] = values;
//
// console.log(second)
// console.log(fourth)

// Swapping Variables:

// let x = 42, y = 99;
// [x, y] = [y, x];
//
// console.log(x); // 99
// console.log(y); // 42

// Mutating an Array: didn't figure how this works

// let arr = [10, 20, 30, 40];
// [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
//
// console.log(arr); // [40, 20, 30, 10]

// Destructuring a Function Return Value:

// function getUser() {
//     return ["Alice", 25];
// }
//
// const [name, age] = getUser();
// console.log(name); // Alice
// console.log(age);  // 25

// Rest Operator:

// const numbers = [3, 6, 9, 12, 15];
// const [first, second, ...rest] = numbers;
//
// console.log(first);  // 3
// console.log(second); // 6
// console.log(rest);   // 9, 12, 15

// const book = { title: "1984", author: "George Orwell", year: 1949 };
// const { title, ...rest } = book;
//
// console.log(title); //
// console.log(rest);  //

// Renaming Variables while Destructuring

// const user = { username: "Alice", age: 22 };
// const { username, age: yearsOld } = user;
//
// console.log(username); // Alice
// console.log(yearsOld); // 22

// Extract Values from a Function Return (Object)

// function getCar() {
//     return { brand: "Tesla", model: "Model S", year: 2023 };
// }
//
// const { brand, model, year } = getCar();
//
// console.log(brand); // "Tesla"
// console.log(model); // "Model S"
// console.log(year);  // 2023

// Nested Object Destructuring

// const person = {
//     name: "Eve",
//     address: {
//         city: "New York",
//         street: "5th Avenue"
//     }
// };
//
// const { address: { street } } = person;
//
// console.log(street); // "5th Avenue"

// let user = {
//     username: "JohnDoe",
//     email: "john@example.com",
//     age: 30,
// };
//
// // TODO: Destructure `username` and `email` from `user`
//
// let { username, email } = user;
//
// console.log(username, email);
//
// let subjects = ["Math", "Physics", "History", "Biology"];
//
// // Destructuring the first two subjects
// let [firstSubject, secondSubject] = subjects;
//
// console.log(firstSubject, secondSubject);

// let tasks = [
//     { id: 1, name: "Task 1", isDone: true },
//     { id: 2, name: "Task 2", isDone: false },
// ];
//
// let task0 = { id: 0, name: "Task 0", isDone: false };
// let task9 = { id: 9, name: "Task 9", isDone: true };
//
// // Creating a new array with task0 at the beginning and task9 at the end
// let newTasks = [task0, ...tasks, task9];
//
// console.log(newTasks);

// let person1 = {
//     name: "John",
//     age: 32,
//     isMarried: true,
//     hasBeen: ["Armenia", "Russia", "Germany", "Mexico"],
//     children: {boys:["Jake", "Babken"], girls: ["Vika", "Varduhi"]}
// }
//
// let updatedPerson1 = {...person1,children:""}
//
// console.log(`person1`, person1)
// console.log(`updatedPerson1`, updatedPerson1)
// console.log(person1.hasBeen)

// let book = {
//     title: "The Pragmatic Programmer",
//     author: {
//         name: "Andy Hunt",
//         age: 55
//     }
// };
//
// let updatedBook = {...book}

// Expected output: "The Pragmatic Programmer"
// Expected output: "Andy Hunt"

// console.log(book.title); required another solution

// // // ex1

// let person = {
//     name: "Alex",
//     age: 30,
//     isMarried: false
// };
//
// // Your code here
//
// let updatedPerson = {...person, hobby: "Reading"};
//
// console.log(updatedPerson);
// Expected output: { name: "Alex", age: 30, isMarried: false, hobby: "Reading" }

// ex2

// let user = {
//     name: "Mike",
//     hobbies: ["music", "sports"]
// };
//
// // Your code here
//
// let updatedUser = {...user,hobbies: [...user.hobbies,"gaming"]};
//
// console.log(updatedUser);
// Expected output: { name: "Mike", hobbies: ["music", "sports", "gaming"] }

// ex3

// let student = {
//     name: "Emma",
//     subjects: ["Math", "English"]
// };
//
// // Your code here
//
// let updatedStudent ={...student, subjects: [...student.subjects, "Physics"]};
//
// // pay attention to key name
//
// console.log(`student`,student)
// console.log(`updatedStudent`,updatedStudent);
// // Expected output: { name: "Emma", subjects: ["Math", "English", "Physics"] }

// ex4 adding property (key+value)

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
//
// // Your code here
//
// let updatedCar = {...car, color: "red"};
//
//
// console.log(`car`,car);
// console.log(`updatedCar`,updatedCar);
// Expected output:
// { brand: "Toyota", model: "Corolla", year: 2020, color: "red" }

// ex5

// let updatedCompany = {...company,departments: {...company,departments,IT}};

// let company = {
//     name: "TechCorp",
//     departments: {
//         IT: {
//             employees: [
//                 { name: "Alice", salary: 50000 },
//                 { name: "Bob", salary: 45000 }
//             ]
//         }
//     }
// };

// Your code here

// not my code

// const updatedCompany = {
//     ...company,
//     departments: {
//         ...company.departments,
//         IT: {
//             ...company.departments.IT,
//             employees: company.departments.IT.employees.map(
//                 employee => employee.name === "Alice"
//                     ? { ...employee, salary: 55000 }
//                     : employee
//             )
//         }
//     }
// };
//
//
//
// console.log(updatedCompany);
// change alice salary to 55000
// Expected output:
// {
//   name: "TechCorp",
//   departments: {
//     IT: {
//       employees: [
//         { name: "Alice", salary: 55000 }, // Updated salary
//         { name: "Bob", salary: 45000 }
//       ]
//     }
//   }
// }

let product = {
    name: "Laptop",
    specs: {
        storage: {
            type: "SSD",
            capacity: 256
        }
    }
};

// TODO: Create an updatedProduct object
// Use the spread operator to update the storage capacity to 512
// Ensure the original object remains unchanged

let updatedProduct = {...product, specs: {...product.specs.storage, capacity: 512}};

console.log(updatedProduct);
// Expected output:
// {
//   name: "Laptop",
//   specs: {
//     storage: {
//       type: "SSD",
//       capacity: 512 // Updated capacity
//     }
//   }
// }
