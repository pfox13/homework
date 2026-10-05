import { useState } from 'react';
import Task from './Task';
import Form from './Form';
import './App.css';

function App() {
  let [tasks, setTasks] = useState([
    {
      text: "Выучить JavaScript",
      done: false
    },

    {
      text: "Познакомится с React",
      done: false
    },

    {
      text: "Устроиться на работу",
      done: false
    },
  ])

  let addTask = text => {
    setTasks([...tasks, { text }]);
  }

  let doneTask = index => {
    let newTask = [...tasks];
    newTask[index].done = true;
    setTasks(newTask);
  }

  let undoneTask = index => {
    let newTask = [...tasks];
    newTask[index].done = false;
    setTasks(newTask);
  }

  let deleteTask = index => {
    let newTask = [...tasks];
    newTask.splice(index, 1)
    setTasks(newTask);
  }

  return (
    <div className="App">
      <div className="task-list">
        {
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              doneTask={doneTask}
              undoneTask={undoneTask}
              index={index}
              deleteTask={deleteTask}
            />
          ))
        }
        <Form addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
