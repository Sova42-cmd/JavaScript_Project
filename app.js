// const array = [9, 1, 2, 3, 7, 87];
// // // const arrayStrings = [1, 2, 3, 7, null, "Hello"];
// // const array = new Array(1,2, 8, 12)
//
// console.log(array.length);

const inputElement = document.getElementById("title")
const createBtn = document.getElementById("create")
const listElement = document.getElementById("list")

// console.log(inputElement.value)

// const notes = ["Necessary notes 1", "Super necessary notes 2", "test1", "test2"]

// function render() {
//
//     // for(let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }
//     // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
//     // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))
//
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//     // listElement.innerHTML =
//     listElement.insertAdjacentHTML('beforeend',
//
//         getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }
// function getNoteTemplate(title) {
//     return `
//
//          <li class="list-group-item d-flex justify-content-between align-items-center">
//                 <span>${title}</span>
//                 <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//               </span>
//             </li>
// `
// }

const notes = [
    {
        title: "Necessary notes 1",
        completed: false
    },
    {
        title: "Super necessary notes 2",
        completed: true
    }
]

function render() {

    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>No tasks found</p>'
    }

    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))

    for(let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }


    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}
render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    const newNote = {
        title: inputElement.value,
        completed: false
    }
    // listElement.innerHTML =

    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    // console.log(event.target.dataset.index)
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        // parseInt() is the same as Number()
        const type = event.target.dataset.type
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    // console.log(note.completed)
    return `
      
         <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="${note.completed ? 'text-decoration-line-through': ''}">${note.title}</span>
                <span>
                
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" 
                data-type="toggle">&check;
              
                </span>
                <span class="btn btn-small btn-danger" data-index="${index}" 
                data-type="remove">&times;
                </span>
              </span>
            </li>
`
}