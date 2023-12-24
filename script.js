const button = document.querySelector("button")
const dialog = document.querySelector("dialog")
const submit = document.querySelector("form button")
button.onclick = () => dialog.showModal()
let addbook = e => {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let isRead = document.querySelector("#isread").checked
    let checked = "";
    if (isRead == true) {
      checked = "checked"
    }
    dialog.close()
    document.body.insertAdjacentHTML("beforeend",
    `<div class="row">
    <div class="title">${title}</div>
    <div class="author">${author}</div>
    <div class="pages">${pages}</div>
    <label class="isread" for="0">Read<input type="checkbox" ${checked}></label>
    <button class="remove">×</button>
    </div>`)
    deleteRows()
    
}
submit.addEventListener('click', addbook)
document.querySelector(".close").onclick = () => dialog.close()
function deleteRows() {
  let remove = document.querySelectorAll(".remove")
  remove.forEach(button => button.addEventListener('click', e => e.target.parentNode.remove()))
}
deleteRows

