import { useState } from "react";

import { v1 } from "uuid";
import { Modal } from "./modal/Modal";
import { Button } from "./Button";
import { Todolist } from "./Todolist";
// import { Croses } from "./components/Croses";
// import s from "./components/Button.module.css";

type ObjectType = {
  title: string;
  filter: FilterValuesType;
  tasks: Array<TasksType>;
  students: Array<string>;
};
export type TasksType = {
  taskId: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = "all" | "active" | "completed";

export const HW1 = () => {
  // const croses = [
  //   { id: 1, model: "ADIDAS", size: "XXX" },
  //   { id: 1, model: "ABIBAS", size: "YYY" },
  //   { id: 1, model: "PUMA", size: "ZZZ" },
  // ];

  const [todo, setTodo] = useState<Array<ObjectType>>([
    {
      title: "What to learn",
      filter: "all",
      tasks: [
        { taskId: v1(), title: "HTML&CSS", isDone: true },
        { taskId: v1(), title: "JS", isDone: true },
      ],
      students: [
        "Rick Kane",
        "Finnlay Bentley",
        "Samia North",
        "Isaac Morton",
        "Lily-Ann Clifford",
        "Thalia Park",
        "Sapphire Cruz",
        "Cieran Vazquez",
        "Anya Estes",
        "Dominika Field",
        "Rosanna Chung",
        "Safiyah Davey",
        "Ryley Beasley",
        "Kalvin Trejo",
        "Evie-Mae Farrell",
        "Juliet Valencia",
        "Astrid Austin",
        "Lyle Montgomery",
        "Nisha Mora",
        "Kylie Callaghan",
        "Star Wilks",
        "Marissa Colley",
        "Asa Fuller",
        "Leigh Kemp",
        "Avleen Dawson",
        "Sammy Bonilla",
        "Acacia Becker",
        "Coral Shepherd",
        "Melina Molina",
        "Kiran Bailey",
        "Clara Escobar",
        "Alexandru Horn",
        "Brandon-Lee Mercado",
        "Elouise Weston",
        "King Long",
        "Kerri Searle",
        "Kanye Hamer",
        "Elwood Benitez",
        "Mikail Whitaker",
        "Bobby Hardy",
        "Talha Ferry",
        "Priscilla Landry",
        "Olivia-Grace Cain",
        "Kiaan Wallace",
        "Wesley Padilla90",
        "Ella-Grace Wooten91",
        "Kaif Molloy92",
        "Kamal Broadhurst93",
        "Bianca Ferrell94",
        "Micheal Talbot95",
      ],
    },
    {
      title: "What to do",
      filter: "all",
      tasks: [
        { taskId: v1(), title: "HTML&CSS2", isDone: true },
        { taskId: v1(), title: "JS2", isDone: true },
      ],
      students: [
        "Jago Wormald1",
        "Saul Milne2",
        "Aariz Hester3",
        "Dion Reeve4",
        "Anisa Ortega5",
        "Blade Cisneros6",
        "Malaikah Phelps7",
        "Zeeshan Gallagher8",
        "Isobella Vo9",
        "Rizwan Mathis10",
        "Menaal Leach11",
        "Kian Walton12",
        "Orion Lamb13",
        "Faizah Huynh14",
        "Crystal Vaughan15",
        "Vivien Hickman16",
        "Stuart Lu17",
        "Karol Davison18",
        "Dario Burns19",
        "Chloe Rich20",
        "Martyna Felix",
        "Nida Glass",
        "Maeve Miles",
        "Hasnain Puckett",
        "Ayman Cano",
        "Safwan Perry",
        "Fox Kelly",
        "Louise Barlow",
        "Malaki Mcgill",
        "Leanna Cline",
        "Willard Hodge",
        "Amelia Dorsey",
        "Kiah Porter",
        "Jeanne Daly",
        "Mohsin Armstrong",
        "Laurie Rangel",
        "Princess Tierney",
        "Kasim Kendall",
        "Darryl Cope",
        "Elysha Ray",
        "Liyana Harris",
        "Kashif Blackburn",
        "Atif Zimmerman",
        "Sila Hartley",
        "Ralphie Hebert",
      ],
    },
  ]);

  const removeTask = (taskId: string, todolistId: number) => {
    setTodo(
      todo.map((el, index) =>
        index === todolistId
          ? {
              ...el,
              tasks: [...el.tasks.filter((fl) => fl.taskId !== taskId)],
            }
          : el
      )
    );
  };

  const addTask = (title: string, todolistId: number) => {
    const newTask: TasksType = { taskId: v1(), title: title, isDone: false };
    setTodo(
      todo.map((el, index) =>
        index === todolistId ? { ...el, tasks: [newTask, ...el.tasks] } : el
      )
    );
  };

  const changeStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: number
  ) => {
    setTodo(
      todo.map((el, index) =>
        index === todolistId
          ? {
              ...el,
              tasks: el.tasks.map((m) =>
                m.taskId === taskId ? { ...m, isDone: isDone } : m
              ),
            }
          : el
      )
    );
  };

  const changeFilter = (value: FilterValuesType, todolistId: number) => {
    setTodo(
      todo.map((el, index) =>
        index === todolistId ? { ...el, filter: value } : el
      )
    );
  };

  const removeTodolist = (todolistId: number) => {
    setTodo(todo.filter((el, index) => index !== todolistId));
  };

  const removeAllTodolists = () => {
    setTodo([]);
  };

  const removeAllTasksInOneTodo = (todolistId: number) => {
    setTodo((prevState) =>
      prevState.map((t, index) =>
        index === todolistId ? { ...t, tasks: [] } : t
      )
    );
  };

  return (
    <div className="App">
      <div>
        <div>
          {/* <Button className={s.blueForButton}>Blue Button</Button>
          <Button className={s.redForButton}>Red Button</Button> */}
          <Button onClick={() => {}} color={"red"}>
            Red Button
          </Button>
          <Button onClick={() => {}} color={"seccondary"}>
            Blue Button
          </Button>
          <Button onClick={() => {}}>Default Button</Button>
          <Button onClick={() => {}} disabled>
            Disabled Button
          </Button>
        </div>

        {/* <Modal>
          <h2>My modal window</h2>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="pass" />
          <button>send</button>
        </Modal> */}
        <Modal>
          <h2>Confidient information</h2>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="pass" />
          <input type="text" placeholder="pass" />
          <label>
            <input type="checkbox" />I agree
          </label>
          <button>send</button>
        </Modal>
        {/* <Croses croses={croses}>
          <input type="text" />
          <Button onClick={() => {}} color={"red"}>
            Red Button
          </Button>
          <Button onClick={() => {}} color={"seccondary"}>
            Blue Button
          </Button>
          <p>text - text - text</p>
          <p>text - text - text</p>
          <Button onClick={() => {}}>Default Button</Button>
          <Button onClick={() => {}} disabled>
            Disabled Button
          </Button>
        </Croses>
        <Croses croses={croses}>
          <p>text - text - text</p>
          <p>text - text - text</p>
          <p>text - text - text</p>
          <p>text - text - text</p>
          <p>text - text - text</p>
          <p>text - text - text</p>
          <input type="text" />
        </Croses>
        <Croses croses={croses}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <Button onClick={() => {}} color={"red"}>
            Red Button
          </Button>
          <Button onClick={() => {}} color={"seccondary"}>
            Blue Button
          </Button>
          <Button onClick={() => {}}>Default Button</Button>
          <Button onClick={() => {}} disabled>
            Disabled Button
          </Button>
        </Croses> */}
        <Button onClick={removeAllTodolists}> Deleted all todolists</Button>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {todo.map((tl, index) => {
          const allTodolistTasks = tl.tasks;
          let tasksForTodolist = allTodolistTasks;

          if (tl.filter === "active") {
            tasksForTodolist = allTodolistTasks.filter(
              (t) => t.isDone === false
            );
          }
          if (tl.filter === "completed") {
            tasksForTodolist = allTodolistTasks.filter(
              (t) => t.isDone === true
            );
          }

          return (
            <>
              <Todolist
                key={index}
                id={index}
                title={tl.title}
                tasks={tasksForTodolist}
                students={tl.students}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={tl.filter}
                removeAllTasksInOneTodo={(id) => removeAllTasksInOneTodo(id)}
                removeTodolist={removeTodolist}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
