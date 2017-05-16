const items = document.querySelector("form")
const button2 = document.querySelector("div")
const handleSubmit = (ev) =>{
    ev.preventDefault()
    const form = ev.target
    const inputName = form.personName.value
    addToList(inputName)
    
}
const secondSubmit = (ew) =>{
    ew.preventDefault
    const form = ew.target
    alert("W")
}
function addToList (name){
    var ul = document.getElementById("output")
    var li = document.createElement('li')
    var button = document.createElement('button')
    button.innerText = 'Delete'
    button.id = name //button id is person name
    button.addEventListener('click',secondSubmit,false)
    li.textContent = name + ''
    li.appendChild(button)
    ul.insertBefore(li,ul.childNodes[0])

    return
    
}
items.addEventListener('submit',handleSubmit)

