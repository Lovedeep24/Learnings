import styles from "./Todo.module.css";
export default function Todo({id,title,completed,dispatch}) {
  return (
    <div className={styles.todo}>
      <p>id:{id}</p>
      <p>title:{title}</p>
      <p>completed: {completed ? "true" : "false"}</p>
      <button onClick={()=> dispatch({type:"DELETE", payload: {id: id}})} className={styles.todo}>Delete</button>
      <button className={styles.todo}>Toggle</button>
    </div>
  )
}
