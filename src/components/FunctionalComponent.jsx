import React, {useState} from "react";

const FunctionalComponent = ()=>{
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleNewTodoSumbmit = (event) => {
        event.preventDefault();

        if(newTodo.length === 0){
            return;
        }


        const todoItem = {
            text: newTodo,
            complete : false
        }

        setTodos([...todos, todoItem])

        setNewTodo("")

    }

    const handleToggleComplete = (idx) => {
        const updatedTodos = todos.map((todo, i)=> {
            if(idx === i){
                todo.complete = !todo.complete
            }
            return todo; 
        })
        setTodos(updatedTodos)
    }



    const handleTodoDelete = (delIdx) =>{
        const filteredTodos = todos.filter((todo, i ) => {
            return i!==delIdx;
        })
        setTodos(filteredTodos);
    }


    
    return(
        <div>
            <form onSubmit={(event) => {handleNewTodoSumbmit(event);}}>
            <input onChange={(event) => setNewTodo(event.target.value)} type="text" value={newTodo}/>
            <button>Add</button>
            </form>

        


        {todos.map((todo, i )=>
        {
            return(
                <div key={i}>
                    <input checked={todo.complete} onChange={(event) =>{handleToggleComplete(i)}} type="checkbox" />
                    <span>{todo.text}</span>
                    <button onClick={(event) => {handleTodoDelete(i);}}> Delete </button>
                </div>
            );
            }
            )
        }


        </div>

    )
}
export default FunctionalComponent;