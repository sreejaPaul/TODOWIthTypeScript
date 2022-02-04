import React from 'react';
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e : React.FormEvent<EventTarget>)=>void;
}
const InputField : React.FC<Props> = ({todo, setTodo, handleSubmit}) => {
    return <div>
        <form style={{margin:"10px 0px 0px 680px"}}>
            <input style={{height:"41px", width:"180px"}} type="text" placeholder="Enter ToDo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button style={{height:"41px", width:"80px", marginLeft:"20px"}}  onClick={handleSubmit}>Add</button>
        </form>
    </div>;
}

export default InputField;
