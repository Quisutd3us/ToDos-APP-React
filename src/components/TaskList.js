import React, {useState} from 'react';
import FormTask from "./FormTask";
import '../css/taskList.css';
import Task from "./Task";


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks];
      setTasks(taskUpdated);
    }
  };
  const deleteTask = id => {
    const taskUpdated = tasks.filter(task => task.id !== id);
    setTasks(taskUpdated);
  };
  const doComplete = id => {
    const taskUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    })
    setTasks(taskUpdated);
  };
  return (
      <>
        <FormTask onSubmit={addTask}/>
        <div
            className={'TaskListContainer'}>
          {
            tasks.map((task) =>
                <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    isCompleted={task.isCompleted}
                    deleteTask={deleteTask}
                    doComplete={doComplete}
                />
            )
          }
        </div>
      </>
  );
}

export default TaskList