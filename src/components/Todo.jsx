import React from 'react'
import SingleTodo from './SingleTodo'
import './Todo.css';
const Todos = ({todos,setTodos,setTask,task}) => {
    const handleDelete = (todo) => {
        setTodos(todos.filter((tasks) => tasks.task !== todo.task))
    }
    const handleChange = (e) => {
      setTask(e.target.value);
      
    }
    
  return (
    <div className='todos'>
    {todos.map((todo,index) => <SingleTodo key={index}  todo={todo} handleDelete={handleDelete} handleChange={handleChange} setTodos={setTodos} task={task} todos={todos} />)}
    </div>
  )
}

export default Todos