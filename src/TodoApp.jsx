import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "./hooks/useTodos";


export const TodoApp = () => {

 const { handleDeleteTodo, todosCount, pendingTodosCount, handleNewTodo, handleToggleTodo, todos } = useTodos();
 
  return (
    <>
        
        <h1>TodoApp: { todosCount() }, <small>pendientes: { pendingTodosCount() }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
              <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd onNewTodo={ handleNewTodo } />

            </div>

        </div>

    </>
  )
}
