import { useState, useEffect, use } from "react";
import TaskList from "./TaskList/TaskList";
import "./TaskListContainer.css";
import { addTask, initTask } from "../Redux/taskActions";
import { useDispatch, useSelector } from "react-redux";

function TaskListContainer() {
  const [newTaskTitle, setNewTaskTitle] = useState();
  const [titleError, setTitleError] = useState(false);
  const [newTaskDescription, setNewTaskDescription] = useState();

  //Custom hooks Redux
  const dispatch = useDispatch();
  const storeTasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    console.log("storeTasks", storeTasks);
  }, [storeTasks]);

  function handleTitleChange(value) {
    setNewTaskTitle(value);
    newTaskTitle && newTaskTitle.length > 3
      ? setTitleError(true)
      : setTitleError(false);
  }

  function handleDescriptionChange(value) {
    setNewTaskDescription(value);
    newTaskDescription && newTaskDescription.length > 10
      ? setTitleError(true)
      : setTitleError(false);
  }

  function addNewTask(e) {
    e.preventDefault();
    if (!titleError) {
      let newTask = {
        id: storeTasks.length + 1,
        title: newTaskTitle,
        done: false,
      };
      dispatch(addTask(newTask));
      setNewTaskTitle("");
    }
  }

  return (
    <div className="task-list-container">
      <form onSubmit={addNewTask}>
        <div>
          <div>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="titre de la tâche"
              className="task-input"
              required
            />
          </div>
          <span style={{ display: titleError ? "inline-block" : " none" }}>
            erreur de titre
          </span>
        </div>
        <div>
          <div>
            <input
              type="text"
              value={newTaskDescription}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              placeholder="Description de la tâche"
              required
              className="task-input"
            />
          </div>
          <span
            style={{ display: newTaskDescription ? "inline-block" : " none" }}
          >
            erreur de description
          </span>
        </div>
        <button className="add-button" type="submit">
          Ajouter une tâche
        </button>
      </form>
      Ma Task List:
      <div>
        <TaskList />
      </div>
    </div>
  );
}

export default TaskListContainer;
