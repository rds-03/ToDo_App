import React, { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'
import './SingleTodo.css';
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";
import { TodoType } from '../data';

interface SingleTodoProps {
  todo: TodoType;
  handleDelete: (todo: TodoType) => void;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, handleDelete, setTodos }) => {
  const [isEdit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(todo.task);

  const handleDone = () => {
    setTodos(prev => prev.map((t) => {
      if (t.id === todo.id) {
        return { ...t, isDone: !t.isDone };
      }
      return t;
    }));
  }

  const handleEdit = () => {
    setEditTask(todo.task);
    setEdit(true);
  }

  const handleSave = () => {
    setEdit(false);
    if (editTask.trim() !== '') {
      setTodos(prev => prev.map((t) => {
        if (t.id === todo.id) {
          return { ...t, task: editTask.trim() };
        }
        return t;
      }));
    }
  }

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTask(e.target.value);
  }

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
    if (e.key === 'Escape') {
      setEdit(false);
    }
  }

  return (
    <div className={`single${todo.isDone ? ' done' : ''}`}>
      {isEdit ? (
        <div className='inp'>
          <input
            className='int'
            type='text'
            value={editTask}
            onChange={handleEditChange}
            onKeyDown={handleEditKeyDown}
            autoFocus
          />
          <button className='btn1' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <span className={`todo-name${todo.isDone ? ' strikethrough' : ''}`}>{todo.task}</span>
      )}
      <div className='icons'>
        <FaCheck
          className={`icon${todo.isDone ? ' check-done' : ''}`}
          onClick={handleDone}
          title={todo.isDone ? 'Mark as active' : 'Mark as done'}
        />
        <FaEdit className='icon' onClick={handleEdit} title='Edit' />
        <FaTrash className='icon' onClick={() => handleDelete(todo)} title='Delete' />
      </div>
    </div>
  )
}

export default SingleTodo
