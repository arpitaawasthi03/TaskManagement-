function TaskList({ tasks, deleteTask, completeTask, editTask }) {
    return (
        <div>
            {tasks.map((task) => (
                <div className="task" key={task._id}>
                    <span className={task.completed ? "completed" : ""}>
                        {task.title}
                    </span>

                    <button onClick={() => editTask(task)}>
                        Edit
                    </button>

                    <button onClick={() => completeTask(task)}>
                        {task.completed ? "Undo" : "Done"}
                    </button>

                    <button onClick={() => deleteTask(task._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
