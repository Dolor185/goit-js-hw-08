const throttle = require('lodash.throttle')
const refs = {
    form :document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

const formData = {}
const STORAGE_KEY= "feedback-form-state"
const userData = JSON.parse(localStorage.getItem(STORAGE_KEY))

onOpenPage()
refs.form.addEventListener('input', throttle(onFormInput, 500))

function onFormInput(event) {
formData[event.target.name]= event.target.value

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function onOpenPage () {   
    if(!userData){
        return
    }
  refs.input.value = userData.email
  refs.textarea.value = userData.message
}

refs.form.addEventListener('submit',e=>{
    e.preventDefault()
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(userData)

})

export default refs.form