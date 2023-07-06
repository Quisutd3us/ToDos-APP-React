import React from 'react';
import '../css/task.css';
import {FaSkullCrossbones} from "react-icons/fa/";

function Task({id, text, isCompleted, doComplete, deleteTask}) {
  return (
      <div
          className={isCompleted ? 'taskContainer completedStyle' : 'taskContainer'}
      >
        <div
            className={`taskText`}
            onClick={() => doComplete(id)}>
          {text}
        </div>
        <div
            className={'taskIcon'}>
          <FaSkullCrossbones
              onClick={() => deleteTask(id)}
          />
        </div>
      </div>
  );
}

export default Task