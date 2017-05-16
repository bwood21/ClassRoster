const items = document.querySelector("form")
const handleSubmit = (ev) =>{
    ev.preventDefault()
    const form = ev.target
    const inputName = form.personName.value
    addToList(inputName)
    
}
const secondSubmit = (ew) =>{
    ew.preventDefault
    const form = ew.target
    form.parentNode.parentNode.removeChild(form.parentNode)
    //form.id = name

}
const thirdSubmit = (ex) =>{
    ex.preventDefault
    const form = ex.target
    //form.style.color = 'red'
    form.parentNode.style.color = 'red'
    form.parentNode.style.fontWeight = 'bold'
    var string = 'http://www.getfretless.com/wp-content/uploads/2015/03/Screen-Shot-2014-12-05-at-1.12.10-PM-1024x640.png'

    document.body.style.backgroundImage = "url('"+string+"')"
    setInterval(animate,100)

}
const animate = (ey) => {
    document.querySelector
    
}

function addToList (name){
    var ul = document.getElementById("output")
    var li = document.createElement('li')
    var button = document.createElement('button')
    var hyperbutton = document.createElement('button')
    hyperbutton.innerText = 'HYPE'
    hyperbutton.id = name
    button.innerText = 'Delete'
    button.id = name //button id is person name
    button.addEventListener('click',secondSubmit,false)
    hyperbutton.addEventListener('click',thirdSubmit,false)
    li.textContent = name + ''
    li.appendChild(button)
    li.appendChild(hyperbutton)
    ul.insertBefore(li,ul.childNodes[0])

    return
    
}
items.addEventListener('submit',handleSubmit)

