import { useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList/ToDoList";

// interface Task {
//   name: string;
//   priority: number;
//   time: number;
//   description: string;
// }

// const intialStateTask = [
//   {
//     name: "Crossfit",
//     priority: 5,
//     time: 1,
//     description: "Do crossfit on monday from 10 to 11 am",
//   },
//   {
//     name: "Eat",
//     priority: 5,
//     time: 3,
//     description: "Eat at 9pm, 2pm, 6pm and 9pm",
//   },
// ];

// // const [tasks, setTask] = useState<Array<Task>>([]);
// // useEffect(() => {
// //   setTask(intialStateTask);
// // }, []);

const App = (): JSX.Element => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  // const todoTaskRef = useRef();

  // const handleTodoAdd = () => {
  //   const task = todoTaskRef.current.value;
  //   if (task === "") return;

  //   setTodos((prevTodos) => {
  //     return [...prevTodos, { id: uuidv4(), name, completed: false }];
  //   });
  //   todoTaskRef.current.value = null;
  // };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." />
          <input type="number" placeholder="Deadline (in days)" />
        </div>
        <button className="addTask">Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
