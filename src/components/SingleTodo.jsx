import React, {useState} from 'react'
import './SingleTodo.css';
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";
const SingleTodo = ({todo,handleDelete,handleChange,setTodos,task,todos}) => {
   const [isDone,setIsdone] = useState(false);
   const [isEdit,setEdit] = useState(false);
   const handleDone = () => {
    setIsdone(true);
   }
  
   const handleEdit = () => {
    setEdit(true);
   }
   const handleClick = (todo) => {
    setEdit(false);
    if(task !== null){
       setTodos(todos.map((tod)=> {
        if(tod.task === todo.task){
            tod.task = task;
        }
        return tod;
       }));
      }
      setTask(null);
   }
  return (
    <div className='single'>
       { isDone===true ? <s className='todo-name'><b>{todo.task}</b></s> : isEdit === false ? <h4 className='todo-name'>{todo.task}</h4>: <div className='inp'><input className='int' type='text' defaultValue={todo.task}  onChange={(e) => handleChange(e)} /><button className='btn1' onClick={()=>handleClick(todo)} >Edit</button></div> } 
        <div className='icons'>
            <FaCheck className='icon' onClick={handleDone} />
            <FaEdit className='icon' onClick={handleEdit}/>
            <FaTrash className='icon' onClick={() => handleDelete(todo)}/>
        </div>
    </div>
  )
}

export default SingleTodo