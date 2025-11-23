import { useState, ChangeEvent } from 'react'
import Todos from './components/Todo';
import './App.css'
import todo, { TodoType } from './data';

function App() {
  const [todos, setTodos] = useState<TodoType[]>(todo);
  const [task, setTask] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTask(event.target.value);
  }

  const handleClick = () => {
    if (task !== null && task.trim() !== '') {
      setTodos((prev) => [...prev, {
        id: Date.now().toString(),
        task: task,
        isDone: false
      }]);
    }
    setTask(null);
  }

  return (
    <div className='container'>
      <h1 className='heading'>ToDo List</h1>
      <div className='inp'>
        <input
          type='text'
          placeholder='Add task'
          value={task || ''}
          className='int'
          onChange={handleChange}
        />
        <button className='btn' onClick={handleClick}>+</button>
      </div>
      <Todos todos={todos} setTodos={setTodos} setTask={setTask} task={task} />
    </div>
  )
}

export default App
