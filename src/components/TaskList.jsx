import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { taskList } = useContext(TaskContext);

  if (taskList.length === 0) {
    return (
      <h2 className="text-zinc-200 font-bold text-4xl text-center">
        No tasks available
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {taskList.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
