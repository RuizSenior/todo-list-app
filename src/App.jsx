import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-gray-900 min-h-screen p-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-white mb-10">
          ToDo List 📝
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
