import { createContext } from "react";
import { useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleAddTask = (task) => {
    setTaskList([
      ...taskList,
      {
        title: task.title,
        description: task.description,
        id: taskList.length,
        completed: false,
      },
    ]);
  };

  const toggleCompleteTask = (taskId) => {
    const updatedTasks = taskList.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };
  

  const handleDeleteTask = (taskId) => {
    const newTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(newTaskList);
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        handleAddTask,
        handleDeleteTask,
        toggleCompleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
