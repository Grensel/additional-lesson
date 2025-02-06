import { ChangeEvent, useState, KeyboardEvent } from "react";
import { FilterValuesType, TasksType } from "./HW2Sprint2";

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TasksType>;
  removeTask: (payload: { taskId: string; todolistId: string }) => void;
  changeFilter: (payload: { filter: FilterValuesType; todolistId: string }) => void;
  addTask: (payload: { title: string; todolistId: string }) => void;
  changeTaskStatus: (payload: { taskId: string; isDone: boolean; todolistId: string }) => void;
  removeTodolist: (id: string) => void;
  filter: FilterValuesType;
};

export const Todolist = (props: PropsType) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addTask = () => {
    const newTitle = title.trim();
    if (newTitle !== "") {
      props.addTask({ title: newTitle, todolistId: props.id });
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addTask();
    }
  };

  const removeTodolist = () => props.removeTodolist(props.id);

  const onAllClickHandler = () => props.changeFilter({ filter: "all", todolistId: props.id });
  const onActiveClickHandler = () => props.changeFilter({ filter: "active", todolistId: props.id });
  const onCompletedClickHandler = () =>
    props.changeFilter({ filter: "completed", todolistId: props.id });

  return (
    <div>
      <h3>
        {" "}
        {props.title}
        <button onClick={removeTodolist}>x</button>
      </h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>
        {props.tasks.map(t => {
          const onClickHandler = () => props.removeTask({ taskId: t.taskId, todolistId: props.id });
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus({
              taskId: t.taskId,
              isDone: newIsDoneValue,
              todolistId: props.id,
            });
          };

          return (
            <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
              <input type="checkbox" onChange={onChangeHandler} checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          className={props.filter === "all" ? "active-filter" : ""}
          onClick={onAllClickHandler}
        >
          All
        </button>
        <button
          className={props.filter === "active" ? "active-filter" : ""}
          onClick={onActiveClickHandler}
        >
          Active
        </button>
        <button
          className={props.filter === "completed" ? "active-filter" : ""}
          onClick={onCompletedClickHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
