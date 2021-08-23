import "./maincss/App.css";
import DisplayTodos from "./components/DisplayTools";
import Todos from "./components/todos";

function App() {
  return (
      <div className="App">
        <h1>
          Todo App
        </h1>
        <div>
          <Todos />
          <DisplayTodos />
        </div>
      </div>
  );
}

export default App;