$(document).foundation()

const megaroster = {
    students: [],
    init(){
        document.querySelector("form#new-student").addEventListener('submit',this.addStudent)
    },

    addStudent(ev){
        ev.preventDefault()
        const f = ev.target
        const studentName = this.studentName.value  //can replace 'this' with ev.target
        
    },
}
megaroster.init()