import { CheckCircle, Circle } from "lucide-react";
import "./TaskList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

function TaskList() {
  const storeTasks = useSelector((state) => state.tasks.tasks);

  return (
    <>
      <ul>
        {storeTasks.map((task) => (
          <li key={task.id}>
            {task.done === true ? (
              <CheckCircle className="check-icon" />
            ) : (
              <Circle className="circle-icon" />
            )}
            id:{task.id} / title : {task.title}
            <Link to={`/task/${task.id}`}>Lien vers la vue détaillée</Link>
          </li>
        ))}
      </ul>
      <p>c'est une super taks list</p>
    </>
  );
}

export default TaskList;
