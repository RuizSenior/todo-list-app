import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { handleAddTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      setError("Please complete the title and description.");
      return;
    }
    handleAddTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form className="bg-gray-800 p-4 my-4 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-zinc-200 mb-2">Add a task</h2>
        {error && (
          <p className="bg-rose-700 text-white p-2 rounded mb-2 ">{error}</p>
        )}
        <input
          type="text"
          placeholder="Task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-gray-600 p-3 w-full mb-2 rounded-lg text-zinc-200"
        />
        <textarea
          name=""
          id=""
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-gray-600 p-3 w-full mb-2 rounded-lg text-zinc-200"
        ></textarea>

        <button className="w-full sm:w-auto bg-cyan-900 rounded-3xl px-4 py-2 mt-4 transition ease-linear hover:bg-cyan-950 text-zinc-200">
          Save task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
