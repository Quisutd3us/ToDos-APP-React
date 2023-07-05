import React,{useState} from 'react'
import FormTask from "./FormTask";
import '../css/taskList.css'


function TaskList() {

  const [allTasks, setAllTasks] = useState([])

  return (
      <>
        <FormTask></FormTask>
        <div
            className={'TaskListContainer'}
        >
          <h2>List To Do's</h2>
          {
            allTasks.map(task)=>{
          {task}
          }
          }
        </div>
      </>
  )
}

export default TaskList