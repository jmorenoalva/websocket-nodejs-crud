const nodeForm=document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')


nodeForm.addEventListener('submit',e=>{
  e.preventDefault()

  if(savedId){
    updateNote(savedId, title.value, description.value)
  }else{
    saveNote(title.value, description.value)
  }

  title.value=''
  description.value=''

  title.focus()

})