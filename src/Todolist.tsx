import { ChangeEvent, useState, KeyboardEvent } from "react";
import { FilterValuesType, TasksType } from "./App";
import { Button } from "./components/Button";

type PropsType = {
  id: number;
  title: string;
  tasks: Array<TasksType>;
  students: Array<string>;
  removeTask: (taskId: string, todolistId: number) => void;
  changeFilter: (value: FilterValuesType, todolistId: number) => void;
  addTask: (title: string, todolistId: number) => void;
  changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void;
  removeTodolist: (id: number) => void;
  removeAllTasksInOneTodo: (id: number) => void;
  filter: FilterValuesType;
};

export const Todolist = (props: PropsType) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const removeTodolistHandler = () => props.removeTodolist(props.id);

  const addTaskHendler = () => props.addTask(title, props.id);

  const removeTaskHendler = (taskId: string) =>
    props.removeTask(taskId, props.id);

  const changeFilterHendler = (value: FilterValuesType) =>
    props.changeFilter(value, props.id);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      props.addTask(title, props.id);
    }
  };

  return (
    <div>
      <h3>
        {props.title}
        <Button onClick={removeTodolistHandler}>x</Button>
      </h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyDown={onKeyPressHandler}
          className={error ? "error" : ""}
        />
        <Button onClick={addTaskHendler}>+</Button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <Button onClick={() => props.removeAllTasksInOneTodo(props.id)}>
        Remove all tusks
      </Button>

      <ul>
        {props.tasks.map((t) => {
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
          };

          return (
            <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
              <input
                type="checkbox"
                onChange={onChangeHandler}
                checked={t.isDone}
              />
              <span>{t.title}</span>
              <Button onClick={() => removeTaskHendler(t.taskId)}>x</Button>
            </li>
          );
        })}
      </ul>
      <div>
        <Button
          className={props.filter === "all" ? "active-filter" : ""}
          onClick={() => changeFilterHendler("all")}
        >
          All
        </Button>
        <Button
          className={props.filter === "active" ? "active-filter" : ""}
          onClick={() => changeFilterHendler("active")}
        >
          Active
        </Button>
        <Button
          className={props.filter === "completed" ? "active-filter" : ""}
          onClick={() => changeFilterHendler("completed")}
        >
          Completed
        </Button>
        {/* <button
          className={props.filter === "active" ? "active-filter" : ""}
          onClick={() => {}}
        >
          Active
        </button>
        <button
          className={props.filter === "completed" ? "active-filter" : ""}
          onClick={() => {}}
        >
          Completed
        </button> */}
      </div>
      <p></p>
      {props.students.map((el) => {
        return <div>{el}</div>;
      })}
    </div>
  );
};
