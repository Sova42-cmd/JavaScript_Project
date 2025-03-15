// const array = [9, 1, 2, 3, 7, 87];
// // // const arrayStrings = [1, 2, 3, 7, null, "Hello"];
// // const array = new Array(1,2, 8, 12)
//
// console.log(array.length);

const inputElement = document.getElementById("title")
const createBtn = document.getElementById("create")
const listElement = document.getElementById("list")

// console.log(inputElement.value)

createBtn.onclick = function () {
    // listElement.innerHTML =
    listElement.insertAdjacentHTML('beforeend',

        `
      
         <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${inputElement.value}</span>
                <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
              </span>
            </li>
`
    )
}