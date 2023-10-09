import { useState } from 'react'
import Todos from './components/Todo';
import './App.css'
import todo from './data';
function App() {
  const [todos, setTodos] = useState(todo);
  const [task,setTask] = useState(null);
  const handleChange = (event) => {
    event.preventDefault();
    setTask(event.target.value);
  }
  
  const found = todos.some((todo) => todo.task===task);
  
  const handleClick = (e) => {
    if(task !== null ){
    
    setTodos((prev) => [...prev,{task:task}]);
  }
  setTask(null);
}
  
  
  return (
    <div className='container'>
      <h1 className='heading'>ToDo List</h1>
      <div className='inp'>
        <input type='text' placeholder='Add task' defaultValue="" className='int' onChange={handleChange}  />
        <button className='btn' onClick={handleClick}>+</button>
      </div>
      <Todos todos={todos} setTodos={setTodos} setTask={setTask} task={task} />
    </div>
  )
}

export default App
