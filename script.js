const button = document.querySelector("button")
const dialog = document.querySelector("dialog")
const submit = document.querySelector("form button")
button.onclick = () => dialog.showModal()
let addbook = e => {
    e.preventDefault();
    let title = document.querySelector("#title")
    let author = document.querySelector("#author").textContent
    let pages = document.querySelector("#pages").textContent
    let isRead = document.querySelector("#isread")
    document.body.innerHTML += `<div class="row">
    <div class="title">${title.textContent}</div>
    <div class="author">${author}</div>
    <div class="pages">${pages}</div>
    <label class="isread" for="0">Read</label><input type="checkbox">
    </div>`
    dialog.close()
}
submit.addEventListener('click', addbook)

