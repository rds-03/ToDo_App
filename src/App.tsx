import { useState, ChangeEvent, useEffect, KeyboardEvent } from 'react'
import Todos from './components/Todo';
import './App.css'
import todo, { TodoType } from './data';

function App() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : todo;
  });
  const [task, setTask] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleTaskInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTodos((prev) => [...prev, {
        id: Date.now().toString(),
        task: task.trim(),
        isDone: false
      }]);
      setTask('');
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.isDone;
    if (filter === 'completed') return t.isDone;
    return true;
  });

  const activeCount = todos.filter(t => !t.isDone).length;
  const completedCount = todos.filter(t => t.isDone).length;

  const handleClearCompleted = () => {
    setTodos(todos.filter(t => !t.isDone));
  }

  return (
    <div className='container'>
      <h1 className='heading'>ToDo List</h1>
      <div className='inp'>
        <input
          type='text'
          placeholder='Add task'
          value={task}
          className='int'
          onChange={handleTaskInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className='btn' onClick={handleAddTask}>+</button>
      </div>
      <div className='filter-bar'>
        <span className='task-count'>{activeCount} task{activeCount !== 1 ? 's' : ''} left</span>
        <div className='filters'>
          <button className={`filter-btn${filter === 'all' ? ' active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn${filter === 'active' ? ' active' : ''}`} onClick={() => setFilter('active')}>Active</button>
          <button className={`filter-btn${filter === 'completed' ? ' active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
        </div>
        {completedCount > 0 && (
          <button className='clear-btn' onClick={handleClearCompleted}>Clear completed</button>
        )}
      </div>
      <Todos todos={filteredTodos} setTodos={setTodos} />
    </div>
  )
}

export default App
