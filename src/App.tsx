import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './TodoList';

interface Todo {
  id: number;
  todo: string;
  hasFinished: boolean;
}
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, hasFinished: false }])
      setTodo("");
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <div className='title'>Todo List</div>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      {todos.length > 0 ? <TodoList todos={todos} setTodos={setTodos} /> : ""}
    </div>
  );
}

export default App;
