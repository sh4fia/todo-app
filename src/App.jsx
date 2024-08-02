import { useState } from 'react';
import './App.css'
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';
import { nanoid } from 'nanoid';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
  ))

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const editTask = (id, newName) => {
    const editedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTasks);
  }

  const tasksList = tasks?.filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask} />
  ));

  const tasksNoun = tasksList.length !== 1 ? "tasks" : "task";
  const headingText = `${tasksList.length} ${tasksNoun} remaining`;

  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <Form addTask={addTask} />
      <div className='filters'>
        {filterList}
      </div>
      <h2>{headingText}</h2>
      {tasksList}
    </div>
  )
}

export default App
