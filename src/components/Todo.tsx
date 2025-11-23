import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import SingleTodo from './SingleTodo'
import './Todo.css';
import { TodoType } from '../data';

interface TodosProps {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  setTask: Dispatch<SetStateAction<string | null>>;
  task: string | null;
}

const Todos: React.FC<TodosProps> = ({ todos, setTodos, setTask, task }) => {
  const handleDelete = (todo: TodoType) => {
    setTodos(todos.filter((tasks) => tasks.id !== todo.id))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleChange={handleChange}
          setTodos={setTodos}
          task={task}
          todos={todos}
        />
      ))}
    </div>
  )
}

export default Todos
