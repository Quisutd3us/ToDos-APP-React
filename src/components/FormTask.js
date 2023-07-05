import React, {useState} from 'react'
import '../css/formTask.css'
function FormTask(props) {

  const [input,setInput] =useState('')
  const manageInput =(e)=>{
    setInput(e.target.value)
  }
  const manageClick =(e)=>{
    e.preventDefault()
    const newTask ={
      id:'123123',
      text:input,
      isCompleted:false
    }
    console.log(newTask)
  }

  return(
      <form
        className={'taskForm'}
      >
        <input
          className={'taskInput'}
          type={'text'}
          placeholder={'What is the task?'}
          name={'inputTodo'}
          onChange={manageInput}
        />
        <button
          className={'taskAddButton'}
          onClick={manageClick}
        >Add Task (+)</button>
      </form>
  )
}

export default FormTask