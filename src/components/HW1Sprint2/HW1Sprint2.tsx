import { useState } from "react";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = { id: string; title: string };
export type DataFilterType = {
  data: TaskType[];
  filter: FilterValuesType;
};
type TasksStateType = {
  [key: string]: DataFilterType;
};

export const HW1Sprint2 = () => {
  // let todolistID1 = v1();
  // let todolistID2 = v1();
  //
  // let [todolists, setTodolists] = useState<Array<TodolistsType>>([
  //     {id: todolistID1, title: 'What to learn', filter: 'all'}, //0
  //      {id: todolistID2, title: 'What to buy', filter: 'all'},  //1
  // ])
  //
  // let [tasks, setTasks] = useState({
  //     [todolistID1]: [
  //         {id: v1(), title: "HTML&CSS", isDone: true},
  //         {id: v1(), title: "JS", isDone: true},
  //         {id: v1(), title: "ReactJS", isDone: false},
  //         {id: v1(), title: "Rest API", isDone: false},
  //         {id: v1(), title: "GraphQL", isDone: false},
  //     ],
  //     [todolistID2]: [
  //         {id: v1(), title: "HTML&CSS2", isDone: true},
  //         {id: v1(), title: "JS2", isDone: true},
  //         {id: v1(), title: "ReactJS2", isDone: false},
  //         {id: v1(), title: "Rest API2", isDone: false},
  //         {id: v1(), title: "GraphQL2", isDone: false},
  //     ]
  // });

  const todolistId1 = v1();
  const todolistId2 = v1();

  const [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn" },
    { id: todolistId2, title: "What to buy" },
  ]);

  const [tasks, setTasks] = useState<TasksStateType>({
    [todolistId1]: {
      data: [
        { id: v1(), title: "HTML&CSS1111", isDone: true },
        { id: v1(), title: "JS1111", isDone: true },
      ],
      filter: "all",
    },
    [todolistId2]: {
      data: [
        { id: v1(), title: "HTML&CSS22222", isDone: true },
        { id: v1(), title: "JS2222", isDone: true },
      ],
      filter: "all",
    },
  });

  const removeTodolist = (todolistId: string) => {
    setTodolists(todolists.filter(el => el.id !== todolistId));
    delete tasks[todolistId];
    console.log(tasks);
  };

  const removeTask = (payload: { todolistId: string; taskId: string }) => {
    const { todolistId, taskId } = payload;
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: tasks[todolistId].data.filter(el => el.id !== taskId),
      },
    });
  };

  const addTask = (payload: { todolistId: string; title: string }) => {
    const { todolistId, title } = payload;
    const newTask: TaskType = { id: v1(), title: title, isDone: false };
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: [newTask, ...tasks[todolistId].data],
      },
    });
  };

  const changeStatus = (payload: { todolistId: string; taskId: string; isDone: boolean }) => {
    const { todolistId, taskId, isDone } = payload;
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: tasks[todolistId].data.map(el => (el.id === taskId ? { ...el, isDone } : el)),
      },
    });
  };

  const changeFilter = (payload: { todolistId: string; filter: FilterValuesType }) => {
    const { todolistId, filter } = payload;
    setTasks({ ...tasks, [todolistId]: { ...tasks[todolistId], filter } });
  };
  return (
    <div className="App">
      {todolists.map(el => (
        <Todolist
          key={el.id}
          todolistId={el.id}
          title={el.title}
          tasks={tasks[el.id]}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeStatus}
          filter={tasks[el.id].filter}
          removeTodolist={removeTodolist}
        />
      ))}
    </div>
  );
};
