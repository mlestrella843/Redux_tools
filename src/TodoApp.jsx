import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodosByIdQuery } from './store/apis/todosApis'

const TodoApp = () => {

  // useState to control the button 
  const [todoId, setTodoId] = useState(1);

  const nexToDo = () => {
    setTodoId(todoId + 1 );
  }

  const previusToDo = () => {
    if( todoId ===1 ) return;
    setTodoId(todoId - 1 );
  }
      //Show all todos
      //  const { data: todos=[] , isLoading } = useGetTodosQuery();
      //  console.log(algo);

      //show todo by Id
      const { data: todo, isLoading } = useGetTodosByIdQuery(todoId);
      //console.log(todo);


  return (
    <>  
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>
       
       
        <pre>{ JSON.stringify( todo ) }</pre>

        {/* <ul>
            { todos.map( todo => (         
                <li key={todo.id}>
                    <strong> { todo.completed ? 'DONE' : 'Pending'} </strong>
                    {todo.title}
                </li>   
            ))}
        </ul> */}

        <button onClick={ previusToDo }>
            Previus To Do
        </button>
        
        <button onClick={ nexToDo }>
            Next To Do
        </button>
    </>
  )
}
export default TodoApp;
