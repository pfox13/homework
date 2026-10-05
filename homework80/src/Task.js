function Task(props) {
    let { task, doneTask, index, deleteTask, undoneTask } = props;

    return (
        <div className="task" style={{textDecoration: task.done ? 'line-through' : ""}}>
            {task.text}
            <div>
                <button onClick={() => doneTask(index)}>Done</button>
                <button onClick={() => undoneTask(index)}>Undone</button>
                <button onClick={() => deleteTask(index)}>X</button>
            </div>
        </div>
    )
}

export default Task;