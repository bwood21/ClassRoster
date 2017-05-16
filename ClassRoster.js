const items = document.querySelector("form")
const handleSubmit = (ev) =>{
    ev.preventDefault()
    const form = ev.target
    const inputName = form.personName.value
    addToList(inputName)
    
}
function addToList (name){
    var ul = document.getElementById("output")
    var li = document.createElement('li')
    li.textContent = name

    ul.insertBefore(li,ul.childNodes[0])

    return
    
}
items.addEventListener('submit',handleSubmit)