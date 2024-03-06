import Todo from "./Todo"

export default function Todos({todos,dispatch}) {
  return (
    <div>
      {todos.map(todo=> <Todo key={todo.id} {...todo} dispatch={dispatch}/>)}
    </div>
  )
}
