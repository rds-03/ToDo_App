import React, { Dispatch, SetStateAction } from 'react'
import SingleTodo from './SingleTodo'
import './Todo.css';
import { TodoType } from '../data';

interface TodosProps {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

const Todos: React.FC<TodosProps> = ({ todos, setTodos }) => {
  const handleDelete = (todo: TodoType) => {
    setTodos(prev => prev.filter((t) => t.id !== todo.id))
  }

  return (
    <div className='todos'>
      {todos.length === 0 ? (
        <p className='empty-state'>No tasks here!</p>
      ) : (
        todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            setTodos={setTodos}
          />
        ))
      )}
    </div>
  )
}

export default Todos
