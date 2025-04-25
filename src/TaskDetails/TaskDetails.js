import "./TaskDetails.css";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  const storeTasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    console.log("id fourni", id);
    const timer = setTimeout(() => {
      setTimeout(200);
      const foundTask = storeTasks.find((task) => task.id === parseInt(id));
      if (foundTask) {
        setTask(foundTask);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id, storeTasks]);

  if (loading) {
    return <div className="loading">chargement</div>;
  }

  if (!task) {
    return (
      <div>
        Tache non trouvée:
        <Link to="/">Retour à l'acceuil</Link>
      </div>
    );
  }

  return <div>Le titre de ma task détaillée {task.title}</div>;
}

export default TaskDetails;
