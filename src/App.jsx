import "./App.css";
import List from "./List";
import Todo from "./Todo";

function App() {
  return (
    <div className='min-h-screen h-full w-screen bg-orange-300'>
      <Todo />
      <List />
    </div>
  );
}

export default App;
