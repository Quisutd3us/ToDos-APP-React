import React from 'react'
import '../css/task.css'
import {FaSkullCrossbones} from "react-icons/fa/";

function Task({id,text, isCompleted}) {
  return (
      <div
          className={isCompleted ? 'taskContainer completedStyle' : 'taskContainer'}
      >
        <div
            className={`taskText`}
        >
          {text}
        </div>
        <div
            className={'taskIcon'}
        >
          <FaSkullCrossbones/>
        </div>
      </div>
  )
}

export default Task