$(document).foundation()

const megaroster = {
    init(){
        document.querySelector("form#new-student").addEventListener('submit',this.addStudent)
    },

    addStudent(ev){
        ev.preventDefault()
        const studentName = this.studentName.value  //can replace this with ev.target
        console.log(studentName)
    },
}
megaroster.init()