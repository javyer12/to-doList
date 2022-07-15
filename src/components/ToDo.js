export function ToDo(props) {
    console.log(props.ID)
  return (
    <>
      <li className="todo stack-small">
        <div className="c-cb">
          <input 
          id={props.id} 
          type="checkbox"
           defaultChecked={props.completed}
           onChange={() => props.toggleTaskCompleted(props.ID)}
            />
          <label className="todo-label" >
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button 
          type="button" 
          className="btn btn__danger"
          onClick= {() => props.deleteTask(props.ID)}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    </>
  );
}
