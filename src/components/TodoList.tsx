import React from 'react';
import SingleTodo from './SingleTodo';


interface Todo{
    id: number;
    todo: string;
    hasFinished: boolean;
}

interface ListProps{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList : React.FC<ListProps> = ({todos, setTodos})=> {
  return <div>
      {todos.map((item)=><div><SingleTodo key={item.id} singleTodo={item} todos={todos} setTodos={setTodos}/></div>)}
  </div>;
}

export default TodoList;
