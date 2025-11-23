import React, { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'
import './SingleTodo.css';
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";
import { TodoType } from '../data';

interface SingleTodoProps {
  todo: TodoType;
  handleDelete: (todo: TodoType) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  task: string | null;
  todos: TodoType[];
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, handleDelete, handleChange, setTodos, task, todos }) => {
  const [isDone, setIsdone] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleDone = () => {
    setIsdone(true);
  }

  const handleEdit = () => {
    setEdit(true);
  }

  const handleClick = (todo: TodoType) => {
    setEdit(false);
    if (task !== null && task.trim() !== '') {
      setTodos(todos.map((tod) => {
        if (tod.id === todo.id) {
          return { ...tod, task: task };
        }
        return tod;
      }));
    }
  }

  return (
    <div className='single'>
      {isDone === true ? (
        <s className='todo-name'><b>{todo.task}</b></s>
      ) : isEdit === false ? (
        <h4 className='todo-name'>{todo.task}</h4>
      ) : (
        <div className='inp'>
          <input
            className='int'
            type='text'
            defaultValue={todo.task}
            onChange={(e) => handleChange(e)}
          />
          <button className='btn1' onClick={() => handleClick(todo)}>Save</button>
        </div>
      )}
      <div className='icons'>
        <FaCheck className='icon' onClick={handleDone} />
        <FaEdit className='icon' onClick={handleEdit} />
        <FaTrash className='icon' onClick={() => handleDelete(todo)} />
      </div>
    </div>
  )
}

export default SingleTodo
