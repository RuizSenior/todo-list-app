import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export default function TaskCard({ task }) {
  const { handleDeleteTask, toggleCompleteTask } = useContext(TaskContext);

  return (
    <div className={`bg-gray-800 text-white p-4 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.01] transition-transform duration-200" ${task.completed ? "opacity-60" : ""}`}>
      <h2 className={`text-3xl capitalize font-bold break-words ${task.completed ? "line-through" : ""}`}>
        {task.title}
      </h2>
      <p className={`m-2 text-zinc-200 break-words ${task.completed ? "line-through" : ""}`}>
        {task.description}
      </p>
      <div className="flex gap-2 mt-4">
        <button
          className="bg-cyan-900 rounded-3xl px-2 py-1 hover:bg-emerald-900 transition ease-linear"
          onClick={() => toggleCompleteTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="bg-cyan-950 rounded-3xl px-2 py-1 hover:bg-red-950/20 transition ease-linear"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
