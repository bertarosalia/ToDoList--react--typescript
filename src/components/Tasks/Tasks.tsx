import { useEffect, useState } from "react";
import { TasksStyled } from "./TasksStyled";

interface Task {
  name: string;
  priority: boolean;
  time: number;
  description: string;
}

const intialStateTask = [
  {
    name: "Crossfit",
    priority: true,
    time: 1,
    description: "Do crossfit on monday from 10 to 11 am",
  },
];

const Tasks = () => {
  const [tasks, setTask] = useState<Array<Task>>([]);
  useEffect(() => {
    setTask(intialStateTask);
  }, []);
  return (
    <TasksStyled>
      <div>
        <h1>To Do List</h1>
        <ul>
          {tasks.map((task) => {
            return (
              <ul key={task.name}>
                <h2>{task.name}</h2>
                <h2>{task.priority}</h2>
                <h3>{task.time}</h3>
                <p>{task.description}</p>
              </ul>
            );
          })}
        </ul>
      </div>
    </TasksStyled>
  );
};

export default Tasks;
