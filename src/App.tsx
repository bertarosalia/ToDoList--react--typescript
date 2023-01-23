import { ChangeEvent, useState } from "react";
import { compileFunction } from "vm";
import "./App.css";
import ToDoTask from "./components/ToDoTask/ToDoTask";
import { Task } from "./interfaces";

const App = (): JSX.Element => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in days)"
            value={deadline}
            name="deadline"
            onChange={handleChange}
          />
        </div>
        <button className="addTask" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task: Task, key: number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
