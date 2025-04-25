export const ADD_TASK = "ADD_TASK";
export const LOAD_TASKS = "LOAD_TASKS";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: { tasks },
});

export const initTask = () => {
  return async (dispatch) => {
    try {
      const initialTask = (await import("../tasks.json")).default;
      dispatch(loadTasks(initialTask));
    } catch (error) {
      console.log("erreur d'import des taches");
    }
  };
};
