import React, {useState} from 'react';
import '../css/formTask.css';
import {v4 as uuidv4} from 'uuid';

function FormTask(props) {

  const [input, setInput] = useState('');
  const manageInput = (e) => {
    setInput(e.target.value);
  };
  const manageSend = (e) => {
    e.preventDefault();
    let newTask = {
      id: uuidv4(),
      text: input,
      isCompleted: false
    };
    props.onSubmit(newTask);
  };

  return (
      <form
          className={'taskForm'}
          onSubmit={manageSend}
      >
        <input
            className={'taskInput'}
            type={'text'}
            placeholder={'What is the task?'}
            name={'inputTodo'}
            onChange={manageInput}
            maxLength={50}
        />
        <button
            className={'taskAddButton'}
        >Add Task (+)
        </button>
      </form>
  );
}

export default FormTask