// const array = [9, 1, 2, 3, 7, 87];
// // // const arrayStrings = [1, 2, 3, 7, null, "Hello"];
// // const array = new Array(1,2, 8, 12)
//
// console.log(array.length);

const inputElement = document.getElementById("title")
const createBtn = document.getElementById("create")
const listElement = document.getElementById("list")

// console.log(inputElement.value)

const notes = ["Necessary notes 1", "Super necessary notes 2"]

function render() {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    // listElement.innerHTML =
    listElement.insertAdjacentHTML('beforeend',

        getNoteTemplate(inputElement.value)
    )
    inputElement.value = ''
}
function getNoteTemplate(title) {
    return `
      
         <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${title}</span>
                <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
              </span>
            </li>
`
}