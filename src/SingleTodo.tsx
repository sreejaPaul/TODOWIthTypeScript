import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import './SingleTodo.css';


interface Todo{
    id: number;
    todo: string;
    hasFinished: boolean;
}


interface SingleTodoProps{
    singleTodo: Todo;
    todos: Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo : React.FC<SingleTodoProps> = ({singleTodo, todos, setTodos})=> {
    const handleDone = ()=>{
        const changedArr = todos.map((item: Todo)=>{
            if(item.id === singleTodo.id){
                return {...item, hasFinished: !item.hasFinished}
            }else{
                return item;
            }
        })
        setTodos(changedArr)
    }
    const handleDelete = ()=>{
        const remainingTodoList = todos.filter((item: Todo)=>{
            return item.id !== singleTodo.id;
        })
        setTodos(remainingTodoList)
    }
  return <div className='singleTodo'>
      <div style={{flex:"1"}}>
          {singleTodo.hasFinished ? <span className='finished'>{singleTodo.todo}</span>:<span className='notComplete'>{singleTodo.todo}</span>}
      </div>
      <div><FontAwesomeIcon icon={faTrash} onClick={handleDelete} style={{cursor:"pointer", marginRight:"10px"}}/>
      <FontAwesomeIcon icon={faCheck} onClick={handleDone}  style={{cursor:"pointer"}}/></div>
  </div>;
}

export default SingleTodo;
