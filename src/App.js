import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'


// import Components
import TaskList from "./components/TaskList";

function App() {
  return (
      <div className="App">
        <div className={'container-Logo'}>
          <img
              className={'logo'}
              src={freeCodeCampLogo}
              alt={'FreeCodeCamp Logo'}
          />
        </div>
        <div
            className={'containerTodo'}
        >
          <h1>Todo App</h1>
          <TaskList/>
        </div>
      </div>
  );
}

export default App;
