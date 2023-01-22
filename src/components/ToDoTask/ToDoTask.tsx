import { Task } from "../../interfaces";

interface Props {
  task: Task;
}
const ToDoTask = ({ task }: Props): JSX.Element => {
  return (
    <div>
      {task.taskName} {task.deadline}
    </div>
  );
};

export default ToDoTask;
