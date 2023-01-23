import { Task } from "../../interfaces";

interface Props {
  task: Task;
  completeTask(tasknameToDelete: string): void;
}
const ToDoTask = ({ task, completeTask }: Props): JSX.Element => {
  return (
    <div className="task">
      <input type="checkbox" className="completeTaskCheckbox" />
      <ul className="content">
        <li>{task.taskName}</li>
        <li>{task.deadline}</li>
      </ul>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ToDoTask;
